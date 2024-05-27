const itemsModel = require("./items.model");

module.exports = {
  async index(req, res) {
    const search = req.params.search;
    const items = await itemsModel.getAll(1000,search);
    res.status(200).json(items);
  },

  async postItem(req, res) {
    const imageUrl = req.file ? `/api/uploads/${req.file.filename}` : null;
    const { user, room, addText, file, maker } = req.body;
    const postToDB = {
      user_id: user,
      room: room,
      maker: maker,
      add_text: addText,
      image: imageUrl,
      created_at: new Date().toISOString(),
    };
    const body = await itemsModel.insertItem(postToDB);
    res.status(200).send(body);
  },

  async deleteItem(req, res) {
    const deleteId = req.params.id;
    const body = await itemsModel.deleteAt(deleteId);
    res.status(204).send();
  },
};
