'use strict'

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('Trainer routes', () => {

  beforeEach( () => knex.migrate.rollback()
  .then( () => knex.migrate.latest())
  .then( () => knex.seed.run()))

  describe('Get all the trainers', () => {
    it('should get all trainers', () => {
      return chai.request(server)
      .get('/api/trainers')
      .then( (res) => {
        console.log(res.body)
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('name');
        // res.body[0].name.should.equal('Ash Ketchum');
      });
    });
  });

    describe('Get one trainer', () => {
    it('should get one trainer', () => {
      return chai.request(server)
      .get('/api/trainers/1')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.equal('Ash Ketchum');
      });
    });
  });

    describe('POST api/trainers', () => {
    it('should add a trainer', () => {
      return chai.request(server)
      .post('/api/trainers')
      .send({
          name: 'Johnny',
          photo: '',
          animal_type: 'Aquatic Mammals',
      })
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('id');
      })
    })
  })

    describe('DELETE api/trainers/4', () => {
    it('should remove a single item from trainers table', () => {
      return chai.request(server)
      .delete('/api/trainers/4')
      .then( (res) => {
       res.should.have.status(202);
       res.should.be.json;
       res.body.should.be.a('object');
       
      //  chai.request(server)
      //  .get('/api/trainers')
      //  .then( (res) => {
      //   res.should.have.status(200);
      //   res.should.be.json
      //   res.body.should.be.a('array');
      //   res.body[0].should.have.property('name');
      //   res.body[0].name.should.equal('Willy');
      //  });
      });
    });
  });

})

