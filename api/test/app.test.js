import request from 'supertest'
import { expect } from 'chai'
import app from '../app.js'

describe('GET /', () => {
  it('should return Hello, world!', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.status).to.equal(200)
        expect(res.text).to.equal('Hello, world!')
        done()
      })
  })
})
