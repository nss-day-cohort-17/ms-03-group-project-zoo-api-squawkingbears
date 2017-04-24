// File and its directory generated with
// $ knex seed:make shows_seed --env development.
// knex knows to put it in the db folder (?)

// Then seeded the db with 
// $ knex seed:run --env development

exports.seed = function(knex, Promise) {
  return knex('animals').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('animals').insert({
          zone_id: 1,
          trainer_id: 4,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22      
        }),
        knex('animals').insert({
          zone_id: 2,
          trainer_id: 2,
          name: 'Smaug',
          photo: 'http://vignette4.wikia.nocookie.net/lotr/images/9/98/SmaugDestroyingLakeTownCropped.jpg/revision/latest?cb=20160721034440',
          type: 'Dragons',
          species: 'Eroboran Dragon',
          age: 752 
        }),
        knex('animals').insert({
          zone_id: 3,
          trainer_id: 5,
          name: 'Dunston',
          photo: 'https://i.ytimg.com/vi/Abh5_EhkUjU/hqdefault.jpg',
          type: 'Primates',
          species: 'Orangutan',
          age: 21  
        }),
        knex('animals').insert({
          zone_id: 4,
          trainer_id: 4,
          name: 'Flipper',
          photo: 'http://images.nymag.com/movies/profiles/flipper090720_250.jpg',
          type: 'Aquatic Mammals',
          species: 'Dolphin',
          age: 49  
        }),
        knex('animals').insert({
          zone_id: 5,
          trainer_id: 7,
          name: 'Sally',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/SpottedSalamander.jpg',
          type: 'Reptiles',
          species: 'Salamander',
          age: 2    
        }),
        knex('animals').insert({
          zone_id: 2,
          trainer_id: 6,
          name: 'Hedwig',
          photo: 'http://www.lauraerickson.com/bird/Species/Owls/SnowyOwl/Photos/DSC07473.jpg',
          type: 'Birds of Prey',
          species: 'Magical Owl',
          age: 9   
        }),
        knex('animals').insert({
          zone_id: 1,
          trainer_id: 1,
          name: 'Bulbasaur',
          photo: 'https://lh3.googleusercontent.com/-smI5p-zu0yg/VuESGAPnL6I/AAAAAAAAF48/lzadz7S87341SNyXoDcj5Py914ve89jfACCo/s290/Bulbasaur%2BPokemon%2BGo.png?refresh=900&resize_h=NaN&resize_w=NaN',
          type: 'Pokemon',
          species: 'Plant-Based',
          age: 1   
        }),
        knex('animals').insert({
          zone_id: 2,
          trainer_id: 2,
          name: 'Falcor',
          photo: 'http://vignette4.wikia.nocookie.net/p__/images/8/80/Vlc_2014-05-26_20-03-51-81.bmp.jpg/revision/latest?cb=20140717072010&path-prefix=protagonist',
          type: 'Dragons',
          species: 'Friendly Dragon',
          age: 2987   
        }),
        knex('animals').insert({
          zone_id: 3,
          trainer_id: 3,
          name: 'Scar',
          photo: 'http://vignette1.wikia.nocookie.net/lionking/images/1/11/Scar-HD.png/revision/latest?cb=20160905044045',
          type: 'Large Felines',
          species: 'Villainous Lion',
          age: 54   
        }),
        knex('animals').insert({
          zone_id: 4,
          trainer_id: 1,
          name: 'Pikachu',
          photo: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.jpg',
          type: 'Pokemon',
          species: 'Electric',
          age: 7   
        }),
        knex('animals').insert({
          zone_id: 5,
          trainer_id: 5,
          name: 'King Kong',
          photo: 'https://upload.wikimedia.org/wikipedia/en/8/88/Img_kingkong1.jpg',
          type: 'Primates',
          species: 'Huge Gorilla',
          age: 89  
        }),
        knex('animals').insert({
          zone_id: 4,
          trainer_id: 6,
          name: 'Baldy',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Adler_jagt.jpg/1200px-Adler_jagt.jpg',
          type: 'Birds of Prey',
          species: 'Bald Eagle',
          age: 22 
        })
      ]);
    });
};
