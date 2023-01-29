import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Login from '../services/login.service';
import _jwt from '../utils/jwt';
import * as jwt from 'jsonwebtoken';
import { responseTeamAll, responseTeamId,responseMatchAll, responseMatchInProgress, responseMatchEnd, responseCreateMatch, responseJwtValidate} from './mocks'
import leardBoardService from '../services/LeaderBoard.service';

chai.use(chaiHttp);

const { expect } = chai;
let token = "eyJhbsGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NzQ4NzQ0OTAsImV4cCI6MTY3NDk2MDg5MH0.QYJiDb3NLpBobzjLYmBl4u69Yiw5rQeFelNbzjHinBg"

describe('testando a camada utils', function () {
  describe('Jwt', function () {
    describe('generateToken', function () {
      before(async () => {
          sinon
            .stub(jwt, "sign")
            .resolves(token as _jwt);
        });
        after(()=>{
            (jwt.sign as sinon.SinonStub).restore();
          })

      it('', async function () {
        // recebe objeto do tipo IBody
        let bodyMock = { id: 1, role: 'admin', email: 'admin@admin.com' }
        // nao utiliza funçao assincrona
        let test = await _jwt.generateToken(bodyMock)
        // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',test)
        //  retorna um token
        expect(test).to.deep.equal(token)
      })
    })

    describe('verifyToken', function () {
      before(async () => {
          sinon
            .stub(jwt, "verify")
            .resolves(responseJwtValidate as _jwt);
        });
        after(()=>{
            (jwt.verify as sinon.SinonStub).restore();
          })

      it('', async function () {
        // recebe objeto do tipo IBody
        // let bodyMock = { id: 1, role: 'admin', email: 'admin@admin.com' }
        // nao utiliza funçao assincrona
        let test = await _jwt.verifyToken(token)
        // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',test)
        //  retorna um token
        expect(test).to.deep.equal(responseJwtValidate)
      })
    })
  })
})