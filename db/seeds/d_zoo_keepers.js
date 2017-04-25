// File and its directory generated with
// $ knex seed:make shows_seed --env development.
// knex knows to put it in the db folder (?)

// Then seeded the db with
// $ knex seed:run --env development

exports.seed = function(knex, Promise) {
  return knex('zoo_keepers').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('zoo_keepers').insert({
          zone_id: 1,
          name: 'Andrew Chalkly',
          photo: 'https://uploads.teamtreehouse.com/production/profile-photos/26170/thumb_TeacherShoot-Andrew.jpg'
        }),
        knex('zoo_keepers').insert({
          zone_id: 2,
          name: 'Qui-Gon Jinn',
          photo: 'http://vignette3.wikia.nocookie.net/starwars/images/6/66/Qui-Gon_Jinn_SWFB.png/revision/latest?cb=20160910051518'
        }),
        knex('zoo_keepers').insert({
          zone_id: 3,
          name: 'Wilson',
          photo: 'https://shop.wilson.com/media/catalog/product/w/t/wth4615-1.jpg'
        }),
        knex('zoo_keepers').insert({
          zone_id: 4,
          name: 'Fred Savage',
          photo: 'http://2.bp.blogspot.com/_ek5O2C3F5aY/TQ13ezrV59I/AAAAAAAABdw/x9EKYbbxEPs/s1600/fred-savage.jpg'
        }),
        knex('zoo_keepers').insert({
          zone_id: 5,
          name: 'Abe Lincoln',
          photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMPO-mm7j1uy81l3BxDUX6qB9P2bGYYWdv1uEIz9Yx6B2cCSG5'
        })
      ]);
    });
};
