const { getAll } = require("./items.model");
const itemsModel = require("./items.model");

module.exports = {
  async index(req, res) {
    const items = await getAll(1000);
    res.status(200).json(items);
  },

  async postForm(req, res) {
    res.status(200).send({ message: "File uploaded successfully." });
  },
};
