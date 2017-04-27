exports.up = function(knex, Promise) {
  return knex.schema.createTable('trainers', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('trick_name').notNullable();
    table.string('animal_type').notNullable();
    table.string('photo');
  })
  .createTable('zones', function(table){
    table.increments();
    table.string('location').notNullable();
    table.string('aroma').notNullable();
  })
  .createTable('tricks', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('animal_type').notNullable();
  })

  .createTable('zoo_keepers', function(table){
    table.increments();
    table.integer('zone_id').unsigned().references('zones.id');
    table.string('name').notNullable();
    table.string('photo');
  }).createTable('animals', function(table){
    table.increments();
    table.integer('zone_id').unsigned().references('zones.id');
    table.integer('trainer_id').unsigned().references('trainers.id');
    table.string('name').notNullable();
    table.string('photo');
    table.string('type').notNullable();
    table.string('species').notNullable();
    table.integer('age').notNullable();
  })

};

exports.down = (knex, Promise) => knex.schema.dropTable('animals').dropTable('zoo_keepers').dropTable('trainers').dropTable('zones').dropTable('tricks')
