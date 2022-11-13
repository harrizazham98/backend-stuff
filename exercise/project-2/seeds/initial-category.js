/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  return knex.raw(
  `
  insert into category (id, category_name)
  values (1, "Hobbies > Model Trains & Railway Sets > Rail Vehicles > Trains"), (2, "Hobbies > Model Trains & Railway Sets > Rail Vehicles > Locomotives"),(3, "Hobbies > Model Trains & Railway Sets > Lighting & Signal Engineering > Lamps & Lighting") 
  as new_data
  on duplicate key update
  category_name=new_data.category_name;
  `
  );
 };
 
