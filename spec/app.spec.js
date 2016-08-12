var app = require('../app')
var request = require("request");
var supertest = require("supertest");

var base_url = "http://localhost:7000/";

describe("Express Server API", function() {
  describe("Should return users json on get/users", function() {
    it("Returns status code 200", function(done) {
      supertest(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });
});

describe("Express Server", function() {
  describe("GET / ", function() {
    it("returns status code 200", function(done) {
      request.get(base_url,
        function(err, response, body) {
          expect( response.statusCode ).toBe(200);
          done();
        }
      );
    });
  });

  describe("GET /about", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'about',
        function(err, response, body) {
          expect( response.statusCode ).toBe(200);
          done();
        }
      );
    });
  });

  describe("GET /contact", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'contact',
        function(err, response, body) {
          expect( response.statusCode ).toBe(200);
          done();
        }
      );
    });
  });

});
