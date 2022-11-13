/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  return knex.raw(
  `
  insert into items (id, name, price,
    category_id)
  values (1, "Hornby 2014 Catalogue", 3.42, 1), (2, "FunkyBuysÂ® Large Christmas Holiday Express Festive Train Set (SI-TY1017) Toy Light / Sounds / Battery Operated & Smoke", 16.99, 1),
  (3, "CLASSIC TOY TRAIN SET TRACK CARRIAGES LIGHT ENGINE BOXED BOYS KIDS BATTERY", 9.99,1), (4, "HORNBY Coach R4410A BR Hawksworth Corridor 3rd",39.99,1),(5,"Hornby 00 Gauge 0-4-0 Gildenlow Salt Co. Steam Locomotive Model",32.19,1),
  (6, "20pcs Model Garden Light Double Heads Lamppost Scale 1:100", 6.99, 3), (7, "Hornby 00 Gauge 230mm BR Bogie Passenger Brake Coach Model (Red)", 24.99, 1),
  (8, "Hornby Santa's Express Train Set", 69.93,1), (9, "Hornby Gauge Western Express Digital Train Set with eLink and TTS Loco Train Set",235.58,1),(10,"Learning Curve Chuggington Interactive Chatsworth",175.19,1),
  (11, "Hornby Gauge Railroad Mosley Tarmacadam Locomotive", 27.49, 2), (12, "Kato (USA) 176-1308 F3B Denver & Rio Grande Western", 273.60, 2),
  (13, "Bachmann 37-662 14 Ton Tank Wagon Pease & Partners Red", 9.60,1), (14, "Hornby 00 Gauge 253mm Weathered Paviland Grange Steam Locomotive Train Model",119.50,1),(15,"Kato 3060-2 EF65 500 (F Model) Electric Locomotive",164.8,2),
  (16, "Glacier Express of N gauge 10-1219 Alps [UNESCO paint color] 7 Car Set", 75.99, 2), (17, "Power Trains Freight Industrial (Pack of 4)", 63.99, 1),
  (18, "Chuggington Interactive Wash and Fuel Set with Brewster Train Toy", 693.93,1), (19, "Kumoyuni 74-0 Shonan Color (Model Train)",17.08,1),(20,"Bachmann 31-588 Freightliner Class 70 005 Powerhaul Diesel Weathered",96.05,2)
  as new_data
  on duplicate key update
  name=new_data.name,
  price=new_data.price,
  category_id=new_data.category_id;
  `
  );
 };
 
