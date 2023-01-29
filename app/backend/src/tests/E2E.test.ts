// ./tests/integration/employeeCreation.test.js
import * as sinon from 'sinon';
import * as chai from 'chai';
const { stub } = sinon;
// @ts-ignore
import chaiHttp = require('chai-http');

import { mockToken,
   responseJwtValidate,
    responseMatchAll,
     responseMatchEnd,
      responseMatchInProgress,
       responseTeamAll,
        responseTeamId,
         responseUserGet,
        responseCreateMatch, 
        responseLaederBoardController} from './mocks';
import User from '../database/models/User';
import _jwt from '../utils/jwt';
import { app } from '../app'
import loginValidate from '../validates/Login.validate'

import { Response } from 'superagent'
import Team from '../database/models/Team';
import Matche from '../database/models/Matche';
import LeardBoardService from '../services/LeaderBoard.service';
import leardBoardService from '../services/LeaderBoard.service';

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
        (_jwt.generateToken as sinon.SinonStub).restore();
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
        
        expect(chaiHttpResponse.status).to.deep.equal(200)
      })

      it('return objeto correto', function () {

        expect(chaiHttpResponse.body).to.deep.equal({role: 'admin'})
      })
    })
  })

  describe('team', function () {

    let chaiHttpResponse2: Response

    describe('get:/teams', function () {

      before( async () => {
        sinon
        .stub(Team, "findAll")
        .resolves(responseTeamAll as Team[]);

      chaiHttpResponse2 = await chai.request(app)
          .get('/teams')
      })

      after(()=>{
        (Team.findAll as sinon.SinonStub).restore();
      })
      
      it('return status 200', function () {
        
        expect(chaiHttpResponse2.status).to.deep.equal(200)
      })
      it('return objeto corretamente', function () {
        
        expect(chaiHttpResponse2.body).to.deep.equal(responseTeamAll)
      })
    })
    describe('get/teams/id', function () {
      before( async () => {
        sinon
        .stub(Team, "findByPk")
        .resolves(responseTeamId as Team);

      chaiHttpResponse2 = await chai.request(app)
          .get('/teams/3')
      })

      after(()=>{
        (Team.findByPk as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse2.status).to.deep.equal(200)
      })
      it('return objeto corretamente', function () {
        expect(chaiHttpResponse2.body).to.deep.equal(responseTeamId)
      })
    })
  })
  describe('matches', function () {
    let chaiHttpResponse3: Response

    describe('get:/matches // All', function () {
      before( async () => {
        sinon
        .stub(Matche, "findAll")
        .resolves(responseMatchAll as Matche[]);

      chaiHttpResponse3 = await chai.request(app)
          .get('/matches')
      })

      after(()=>{
        (Matche.findAll as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse3.status).to.deep.equal(200)
      })
      it('return objeto correto', function () {
        expect(chaiHttpResponse3.body).to.deep.equal(responseMatchAll)
      })
    })
    describe('get:/matches // inPrgress', function () {
      before( async () => {
        sinon
        .stub(Matche, "findAll")
        .resolves(responseMatchInProgress as Matche[]);

      chaiHttpResponse3 = await chai.request(app)
          .get('/matches?inProgress=true')
      })

      after(()=>{
        (Matche.findAll as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse3.status).to.deep.equal(200)
      })
      it('return objeto correto', function () {
        expect(chaiHttpResponse3.body).to.deep.equal(responseMatchInProgress)
      })
    })
    describe('get:/matches // End', function () {
      before( async () => {
        sinon
        .stub(Matche, "findAll")
        .resolves(responseMatchEnd as Matche[]);

      chaiHttpResponse3 = await chai.request(app)
          .get('/matches?inProgress=false')
      })

      after(()=>{
        (Matche.findAll as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse3.status).to.deep.equal(200)
      })
      it('return objeto correto', function () {
        expect(chaiHttpResponse3.body).to.deep.equal(responseMatchEnd)
      })
    })
    describe('post:/matches', function () {
      before( async () => {
        sinon
        .stub(_jwt, "verifyToken")
        .resolves(responseJwtValidate as _jwt);
        sinon
        .stub(Matche, "create")
        .resolves(responseCreateMatch as Matche);

      chaiHttpResponse3 = await chai.request(app)
          .post('/matches')
          .auth('authorization', `${mockToken.token}`)
          .send({
            homeTeamId: 16,
            awayTeamId: 8,
            homeTeamGoals: 2,
            awayTeamGoals: 2,
          })
      })

      after(()=>{
        (Matche.create as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse3.status).to.deep.equal(201)
      })
      it('return objeto correto', function () {
        expect(chaiHttpResponse3.body).to.deep.equal(responseCreateMatch)
      })
    })
    describe('patch:/matches/id', function () {
      before( async () => {
        sinon
        .stub(Matche, "update")

      chaiHttpResponse3 = await chai.request(app)
          .patch('/matches/20')
          .send({
            homeTeamGoals: 2,
            awayTeamGoals: 2,
          })
      })

      after(()=>{
        (Matche.update as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse3.status).to.deep.equal(200)
      })
      it('return objeto correto', function () {
        expect(chaiHttpResponse3.body).to.deep.equal({
          message: "atualizado"
        })
      })
    })
    describe('patch:/matches/id/finish', function () {
      before( async () => {
        sinon
        .stub(Matche, "update")

      chaiHttpResponse3 = await chai.request(app)
          .patch('/matches/20/finish')
      })

      after(()=>{
        (Matche.update as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse3.status).to.deep.equal(200)
      })
      it('return objeto correto', function () {
        expect(chaiHttpResponse3.body).to.deep.equal({
          message: "Finished"
        })
      })
    })
  })
  describe('leaderBoard', function () {
    let chaiHttpResponse4: Response
    describe('get:/LeaderBoard/home', function () {
      before( async () => {
        sinon
        .stub(LeardBoardService, "getListHome")
        .resolves(responseLaederBoardController as LeardBoardService);

      chaiHttpResponse4 = await chai.request(app)
          .get('/LeaderBoard/home')
      })

      after(()=>{
        (leardBoardService.getListHome as sinon.SinonStub).restore();
      })

      it('return status 200', function () {
        expect(chaiHttpResponse4.status).to.deep.equal(200)
      })
      it('return objeto correto', function () {
        expect(chaiHttpResponse4.body).to.deep.equal(responseLaederBoardController)
      })
    })
  })
});