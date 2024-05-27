/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      id: 1,
      user_id: 1,
      room: "リビング",
      status: 1,
      add_text: "ソファーに脱いだ服をかけっぱなしにしない",
      fix_text: "とりあえず直してみました",
      image: "/api/uploads/1716472273355.jpeg",
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      user_id: 1,
      room: "ダイニング",
      status: 3,
      add_text: "椅子が出しっぱなしで危ない",
      fix_text: "しまいました",
      image: "/api/uploads/1716472373658.jpeg",
      created_at: new Date().toISOString(),
    },
    {
      id: 3,
      user_id: 2,
      room: "庭",
      status: 2,
      add_text: "雑草生えてます",
      fix_text: "今週末に整備します",
      image: "/api/uploads/1716475916969.jpg",
      created_at: new Date().toISOString(),
    },
  ]);
};