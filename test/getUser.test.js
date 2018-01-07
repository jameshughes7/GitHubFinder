const expect = require('chai').expect;
const nock = require('nock');

const app = require('../app')
const getUser = require('../getUser').getUser;
const response = require('./response');

const useMockedAPI = false

describe('Get User tests', () => {
  var server;

  beforeEach(() => {
    if(useMockedAPI){
      nock('https://api.github.com')
      .get('/users/octocat')
      .reply(200, response);
    }
    server = app.listen(3000)
  });

  afterEach(() => {
    server.close();
  });

  it('Get a user by username', () => {
    return getUser('octocat')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        expect(response.name).to.equal('The Octocat')
        expect(response.company).to.equal('GitHub')
        expect(response.location).to.equal('San Francisco')
      });
  });
});
