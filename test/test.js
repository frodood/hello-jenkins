var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world Dasun', function(done) {
    request(app).get('/').expect('hello world Dasun', done);
  });
});
