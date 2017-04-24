// File and its directory generated with
// $ knex seed:make shows_seed --env development.
// knex knows to put it in the db folder (?)

// Then seeded the db with 
// $ knex seed:run --env development

exports.seed = function(knex, Promise) {
  return knex('zones').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('zones').insert({
          name: 'Northeast',
          aroma: 'Bad'      
        }),
        knex('zones').insert({
          name: 'Northwest',
          aroma: 'Not that great'
        }),
        knex('zones').insert({
          name: 'Southeast',
          aroma: 'Really Bad'     
        }),
        knex('zones').insert({
          name: 'Southwest',
          aroma: 'Kind of okay because funnel cakes'
        }),
        knex('zones').insert({
          name: 'Central',
          aroma: 'Horrible'  
        })
      ]);
    });
};
