'use strict'

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('Zones routes', () => {

  beforeEach( () => knex.migrate.rollback()
  .then( () => knex.migrate.latest())
  .then( () => knex.seed.run()))

  describe('Get all the zones', () => {
    it('should get all zones', () => {
      return chai.request(server)
      .get('/api/zones')
      .then( res => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('location');
      });
    });
  });

  describe('Get one animal', () => {
    it('should get one animal', () => {
      return chai.request(server)
      .get('/api/zones/3')
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('location');
      })
    })
  })

  describe('POST api/zones', () => {
    it('should add an zone', () => {
      return chai.request(server)
      .post('/api/zones')
      .send({
          location: 'Northcentral',
          aroma: 'Actually Okay'     
      })
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.id.should.equal(6);
      })
    })
  })

  describe('DELETE api/zones/:id', () => {
    it('should remove a single item from shows table', () => {
      return chai.request(server)
      .delete('/api/zones/6')
      .then( (res) => {
       res.should.have.status(202);
       res.should.be.json;
       res.body.should.be.a('object');
       
       chai.request(server)
       .get('/api/zones')
       .then( (res) => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[4].should.have.property('location');
       });
      });
    });
  });

})
