'use strict'

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('Animals routes', () => {

  beforeEach( () => knex.migrate.rollback()
  .then( () => knex.migrate.latest())
  .then( () => knex.seed.run()))

  describe('Get all the animals', () => {
    it('should get all animals', () => {
      return chai.request(server)
      .get('/api/animals')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('name');
        res.body[0].name.should.equal('Willy');
      });
    });
  });

  describe('Get one animal', () => {
    it('should get one animal', () => {
      return chai.request(server)
      .get('/api/animals/3')
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('name');
        res.body.name.should.equal('Dunston')
      })
    })
  })

  describe('POST api/animals', () => {
    it('should add an animal', () => {
      return chai.request(server)
      .post('/api/animals')
      .send({
          zone_id: 1,
          trainer_id: 4,
          name: 'Johnny',
          photo: '',
          type: 'Aquatic Mammals',
          species: 'Blue Whale',
          age: 22   
      })
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('id');
      })
    })
  })

  describe('DELETE api/animals/4', () => {
    it('should remove a single item from shows table', () => {
      return chai.request(server)
      .delete('/api/animals/4')
      .then( (res) => {
       res.should.have.status(202);
       res.should.be.json;
       res.body.should.be.a('object');
       
       chai.request(server)
       .get('/api/animals')
       .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('name');
        res.body[0].name.should.equal('Willy');
       });
      });
    });
  });

})
