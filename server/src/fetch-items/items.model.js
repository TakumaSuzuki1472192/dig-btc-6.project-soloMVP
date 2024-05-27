const knex = require("../knex");
const ITEMS_TABLE = "items";

module.exports = {
  ITEMS_TABLE,

  /**
   * @param {number} limit - 取得するITEMSの最大数
   * @return {Promise<Object>} DBにあるITEMSの配列をPromiseで返す
   */
  getAll(limit = 100) {
    return knex("users")
      .innerJoin(ITEMS_TABLE, "users.id", "=", "items.user_id")
      .select();
  },
  insertItem(itemObj) {
    return knex(ITEMS_TABLE).insert(itemObj);
  },
  deleteAt(deleteId) {
    return knex("items").where("id",deleteId).del();
  }
};
