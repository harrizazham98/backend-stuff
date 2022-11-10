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
  insert into product (id, name, price,
 manufacturer_id)
  values (1, "Product 1", 99.9, 1), (2, "Product
 2", 90.2, 2)
  as new_data
  on duplicate key update
  name=new_data.name,
  price=new_data.price,
  manufacturer_id=new_data.manufacturer_id;
  `
  );
 };
 
