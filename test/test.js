'use strict'

var app = require('../app');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('Homepage is working', function() {
  describe('#GET /', function() {
    it('should show the homepage working', function(done) {
      request(app) .get('/')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});
