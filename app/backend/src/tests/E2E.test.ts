// ./tests/integration/employeeCreation.test.js
import * as sinon from 'sinon';
import * as chai from 'chai';
const { stub } = sinon;
// @ts-ignore
import chaiHttp = require('chai-http');

import { mockToken, responseJwtValidate, responseUserGet } from './mocks';
import User from '../database/models/User';
import _jwt from '../utils/jwt';
import { app } from '../app'
import loginValidate from '../validates/Login.validate'

import { Response } from 'superagent'

chai.use(chaiHttp);

const { expect } = chai;


// const consoleLogStub = stub(console, 'log');
// before(() => consoleLogStub.returns());
// after(() => consoleLogStub.restore());

// omitir os `console.log`s dos testes gerando um `stub` pra função
describe('testando Rodas:', function () {

  describe('login:', function () {
  
    let chaiHttpResponse: Response;
    describe('post:/login', function () {

      before( async () => {
        sinon
        .stub(User, "findOne")
        .resolves(responseUserGet as User);
      sinon
        .stub(_jwt, "generateToken")
        .resolves(mockToken.token as _jwt);
      chaiHttpResponse = await chai.request(app)
          .post('/login')
          .send({
            email: "admin@admin.com",
            password: "secret_admin"
          });
      })

    after(()=>{
        (User.findOne as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse.status).to.deep.equal(200)
      })
      it('return o objeto correto', function () {
        expect(chaiHttpResponse.body).to.deep.equals(mockToken)
      })
    })
    describe('get:/login/validate', function () {
      
      before( async () => {
      sinon
        .stub(_jwt, "verifyToken")
        .resolves(responseJwtValidate as _jwt);
      chaiHttpResponse = await chai.request(app)
          .get('/login/validate')
          .auth('authorization', `${mockToken.token}`)
          .send({
            email: "admin@admin.com",
            password: "secret_admin"
          });
      })

      after(()=>{
        (_jwt.verifyToken as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        console.log(chaiHttpResponse.status);
        
        expect(chaiHttpResponse.status).to.deep.equal(200)
      })

      it('return objeto correto', function () {
        console.log(chaiHttpResponse.body);

        expect(chaiHttpResponse.body).to.deep.equal({role: 'admin'})
      })
    })
  })
});