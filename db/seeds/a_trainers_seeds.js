// File and its directory generated with
// $ knex seed:make shows_seed --env development.
// knex knows to put it in the db folder (?)

// Then seeded the db with 
// $ knex seed:run --env development

exports.seed = function(knex, Promise) {
  return knex('trainers').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('trainers').insert({
          name: 'Ash Ketchum',
          animal_type: 'Pokemon',
          photo: 'http://orig11.deviantart.net/06cf/f/2016/191/e/8/ash_ketchum_render_by_tzblacktd-da9k0wb.png'        
        }),
        knex('trainers').insert({
          name: 'Hagrid',
          animal_type: 'Dragons',
          photo: 'http://screenrant.com/wp-content/uploads/2016/12/Hagrid.jpg'
        }),
        knex('trainers').insert({
          name: 'Don Johnson',
          animal_type: 'Large Felines',
          photo: 'http://fiftiesweb.com/tv/miami-vice-dj29.jpg'        
        }),
        knex('trainers').insert({
          name: 'Steve Buscemi',
          animal_type: 'Aquatic Mammals',
          photo: 'http://www.thefamouspeople.com/profiles/images/steve-buscemi-3.jpg'
        }),
        knex('trainers').insert({
          name: 'Woody Harrelson',
          animal_type: 'Primates',
          photo: 'http://www.snakkle.com/wp-content/uploads/2012/09/woody-harrelson-cheers-tv-1985-photo-GC.jpg'        
        }), 
        knex('trainers').insert({
          name: 'Bill Murray',
          animal_type: 'Birds of Prey',
          photo: 'http://www.thatericalper.com/wp-content/uploads/2016/03/bill-murray.jpg',
        }), 
        knex('trainers').insert({
          name: 'Garth Algar',
          animal_type: 'Reptiles',
          photo: 'https://68.media.tumblr.com/e21a35c3ff6cec75dc660179b0d94040/tumblr_nsd5arQAlU1uz53k3o1_500.jpg'
        })
      ]);
    });
};
