'use strict'

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('Tricks routes', () => {

  beforeEach( () => knex.migrate.rollback()
  .then( () => knex.migrate.latest())
  .then( () => knex.seed.run()))

  describe('Get all the tricks', () => {
    it('should get all tricks', () => {
      return chai.request(server)
      .get('/api/tricks')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('name');
      });
    });
  });

    describe('Get one tricks', () => {
    it('should get one tricks', () => {
      return chai.request(server)
      .get('/api/tricks/1')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        // res.body.name.should.equal('Ash Ketchum');
      });
    });
  });

    describe('POST api/tricks', () => {
    it('should add a trick', () => {
      return chai.request(server)
      .post('/api/tricks')
      .send({
          name: 'Test Trick',
          animal_type: 'Large Felines'  
      })
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
      })
    })
  })

    describe('DELETE api/tricks/:id', () => {
    it('should remove a single item from tricks table', () => {
      return chai.request(server)
      .delete('/api/tricks/5')
      .then( (res) => {
       res.should.have.status(202);
       res.should.be.json;
       res.body.should.be.a('object');
       
       chai.request(server)
       .get('/api/trainers')
       .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
       });
      });
    });
  });

})
