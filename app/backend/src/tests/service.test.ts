import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Login from '../services/login.service';
import { app } from '../app';
import _jwt from '../utils/jwt';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
let token = "eyJhbsGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NzQ4NzQ0OTAsImV4cCI6MTY3NDk2MDg5MH0.QYJiDb3NLpBobzjLYmBl4u69Yiw5rQeFelNbzjHinBg"

describe('testando a camada service', function () {
  describe('login', function () {
    before(async () => {
        sinon
          .stub(_jwt, "generateToken")
          .resolves({
            token
          } as _jwt);
      });
      after(()=>{
          (_jwt.generateToken as sinon.SinonStub).restore();
        })
    it('returnToken', async function () {
      // recebe objeto do tipo IBody
      let bodyMock = { id: 1, role: 'admin', email: 'admin@admin.com' }
      // nao utiliza funçao assincrona
      let test = await Login.returnToken(bodyMock)
      //  retorna um token
      expect(test).to.deep.equal({token})
    })
  })
  describe('team', function () {
    it('getAll', function () {})
    it('getById', function () {})
  })
    /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
