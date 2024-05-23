const knex = require("../knex");
const { postForm } = require("./items.controller");
const ITEMS_TABLE = "items";

module.exports = {
  ITEMS_TABLE,

  /**
   * @param {number} limit - 取得するITEMSの最大数
   * @return {Promise<Object>} DBにあるITEMSの配列をPromiseで返す
   */
  getAll(limit = 100) {
    return knex.select().table(ITEMS_TABLE);
  },

};
