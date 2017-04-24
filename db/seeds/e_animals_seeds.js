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
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22  
        }),
        knex('animals').insert({
          zone_id: 5,
          trainer_id: 7,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22    
        }),
        knex('animals').insert({
          zone_id: 2,
          trainer_id: 6,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22   
        }),
        knex('animals').insert({
          zone_id: 1,
          trainer_id: 1,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22   
        }),
        knex('animals').insert({
          zone_id: 2,
          trainer_id: 2,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22   
        }),
        knex('animals').insert({
          zone_id: 3,
          trainer_id: 3,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22   
        }),
        knex('animals').insert({
          zone_id: 4,
          trainer_id: 4,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22   
        }),
        knex('animals').insert({
          zone_id: 5,
          trainer_id: 5,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22  
        }),
        knex('animals').insert({
          zone_id: 4,
          trainer_id: 6,
          name: 'Willy',
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl4Hz7XrJiY3AEWyNpcHpVrk8RAj5l0i_xYx9spaYoDQSTcU0BQfsPnYc',
          type: 'Aquatic Mammals',
          species: 'Orca Whale',
          age: 22   
        })
      ]);
    });
};
