'use strict'

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('Zookeeper routes', () => {

  beforeEach( () => knex.migrate.rollback()
  .then( () => knex.migrate.latest())
  .then( () => knex.seed.run()))

  describe('GET all the zookeepers', () => {
    it('should get all zookeepers', () => {
      return chai.request(server)
      .get('/api/zookeepers')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[4].should.have.property('name');
        res.body[4].name.should.equal('Abe Lincoln');
      });
    });
  });

  describe('GET oneZookeeper', () => {
    it('should get a single zookeeper via primary key', () => {
      return chai.request(server)
      .get('/api/zookeepers/3')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.equal('Wilson');
        res.body.photo.should.be.a('string')
      })
    })
  })

  describe('POST addZookeeper', () => {
    it('should add a row to the zookeeper table with posted obj values', () => {
      return chai.request(server)
      .post('/api/zookeepers')
      .send({zone_id: 5, name: 'Babe Ruth', photo: 'http://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg' })
      .then((res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.equal('Babe Ruth');
        res.body.id.should.equal(6);
      })
    })
  })

})
