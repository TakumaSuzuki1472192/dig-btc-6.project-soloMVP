/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("items", (t) => {
    t.increments("id").primary();
    t.integer("user_id").notNullable();
    t.foreign("user_id").references("users.id");
    t.string("room", 64).notNullable();
    t.integer("status").notNullable();
    t.text("add_text").notNullable();
    t.text("fix_text");
    t.text("image");
    t.timestamp("created_at").notNullable();
    t.timestamp("fixed_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("items");
};
