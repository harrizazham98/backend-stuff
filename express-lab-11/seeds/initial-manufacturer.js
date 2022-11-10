/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('table_name').del()
//   await knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// };

exports.seed = function(knex) {
  return knex.raw(
  `
  insert into manufacturer (id, name)
  values (1, "Lego"), (2, "Disney")
  as new_data
  on duplicate key update
  name=new_data.name;
  `
  );
 };
 
