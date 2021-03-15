let request = require('supertest')
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it

const app = require('../server.js')
request = request('http://localhost:3000')

describe('museums', function () {
  describe('GET', function () {
    it('Should return json as default data format', function (done) {
      request.get('/museums')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })
})
