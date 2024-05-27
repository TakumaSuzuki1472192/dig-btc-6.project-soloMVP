/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("items", (t) => {
    t.dropColumn("status");
    t.dropColumn("fix_text");
    t.dropColumn("fixed_at");
    t.string("maker", 64);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("items", (t) => {
    t.integer("status").notNullable();
    t.text("fix_text");
    t.timestamp("fixed_at");
    t.dropColumn("maker");
  });
};
