// File and its directory generated with
// $ knex seed:make shows_seed --env development.
// knex knows to put it in the db folder (?)

// Then seeded the db with 
// $ knex seed:run --env development

exports.seed = function(knex, Promise) {
  return knex('tricks').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('tricks').insert({
          name: 'Ring Jump',
          animal_type: 'Large Felines'      
        }),
        knex('tricks').insert({
          name: 'Rock Paper Scissors',
          animal_type: 'Primates'
        }),
        knex('tricks').insert({
          name: 'Dive Bomb',
          animal_type: 'Birds of Prey'     
        }),
        knex('tricks').insert({
          name: 'Beach Ball Balance',
          animal_type: 'Aquatic Mammals'
        }),
        knex('tricks').insert({
          name: 'Fireworks',
          animal_type: 'Dragons'  
        }),
        knex('tricks').insert({
          name: 'Pop out of a pokeball',
          animal_type: 'Pokemon'
        }),
        knex('tricks').insert({
          name: 'Catch-a-Fly',
          animal_type: 'Land Based Reptiles'
        }),
      ]);
    });
};
