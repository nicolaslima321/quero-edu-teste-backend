const app = require('./index.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();

let token

chai.use(chaiHttp);

describe('Quero Edu - Backend', () => {
  describe('/GET Hello World', () => {
    it('it should GET a message Hello world', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.status.should.be.equal(200)
        res.body.should.be.a('object')
        done()
      })
    })
  })

  describe('/GET offers (Unauthenticated)', () => {
    it('it should not be able to GET all the offers, because are not using JWT authorization', (done) => {
    chai.request(app)
      .get('/api/offers')
      .end((err, res) => {
        res.should.have.status(401)
        done()
      })
    })
  })

  describe('/POST login', () => {
    it('it should be able to login with the test user seeded', (done) => {
    chai.request(app)
      .post('/api/login')
      .send({ 
        email: "nicolas.pedroso2145@gmail.com",
        password: "loremipsum123"
      })
      .end((err, res) => {
        res.should.have.status(200)
        var message = res.body.message
        token = res.body.authorization
        token.should.be.a('string')
        message.should.be.equal('Successfully authorized')
        done()
      })
    })
  })

  describe('/GET offers', () => {
    it('it should be able to GET all the offers', (done) => {
    chai.request(app)
      .get('/api/offers')
      .set({
        Authorization: token
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
    })
  })

  describe('/GET offers by university name', () => {
    it('it should be able to GET the offers filtered by university name', (done) => {
    chai.request(app)
      .get('/api/offers?filterBy=university_name&filterValue=UNIP')
      .set({
        Authorization: token
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
    })
  })
})