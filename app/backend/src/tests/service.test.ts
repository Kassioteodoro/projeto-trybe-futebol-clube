// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');
// import Login from '../services/login.service';
// // import { app } from '../app';
// import _jwt from '../utils/jwt';
// import { responseTeamAll, responseTeamId,responseMatchAll, responseMatchInProgress, responseMatchEnd, responseCreateMatch} from './mocks'
// // import { Response } from 'superagent';
// import Team from '../database/models/Team';
// import TeamService from '../services/team.service';
// import MatchService from '../services/matches.service';
// import Matche from '../database/models/Matche';

// chai.use(chaiHttp);

// const { expect } = chai;
// let token = "eyJhbsGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NzQ4NzQ0OTAsImV4cCI6MTY3NDk2MDg5MH0.QYJiDb3NLpBobzjLYmBl4u69Yiw5rQeFelNbzjHinBg"

// describe('testando a camada service', function () {
//   describe('login', function () {
//     describe('returnToken', function () {
//       before(async () => {
//           sinon
//             .stub(_jwt, "generateToken")
//             .resolves(token as _jwt);
//         });
//         after(()=>{
//             (_jwt.generateToken as sinon.SinonStub).restore();
//           })
  
//       it('', async function () {
//         // recebe objeto do tipo IBody
//         let bodyMock = { id: 1, role: 'admin', email: 'admin@admin.com' }
//         // nao utiliza funçao assincrona
//         let test = await Login.returnToken(bodyMock)
//         // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',test)
//         //  retorna um token
//         expect(test).to.deep.equal(token)
//       })
//     })
    
//   })


//   describe('team', function () {
//     describe('getAll', function () {
//       before(async () => {
//         sinon
//           .stub(Team, "findAll")
//           .resolves(responseTeamAll as Team[]);
//       });
//       after(()=>{
//           (Team.findAll as sinon.SinonStub).restore();
//         })
  
//       it('', async function () {
//           let test = await TeamService.getAll()
//       // console.log('AAAAAAAAAA',test);
//       expect(test).to.deep.equal(responseTeamAll)
//       })
//     })

//    describe('getById', function () {
//       before(async () => {
//         sinon
//           .stub(Team, "findByPk")
//           .resolves(responseTeamId as Team);
//       });
//       after(()=>{
//           (Team.findByPk as sinon.SinonStub).restore();
//         })
  
//       it('', async function () {
//         let test = await TeamService.getById(3)
//         // console.log('eu to aqui',test);
//         expect(test).to.deep.equal(responseTeamId)
//       })
//     })
//   })


//   describe('matches', function () {
//     describe('findAll', function () {
//       before(async () => {
//         sinon
//           .stub(Matche, "findAll")
//           .resolves(responseMatchAll as Matche[]);
//       });
//       after(()=>{
//           (Matche.findAll as sinon.SinonStub).restore();
//         })

//         it('', async function () {
//           let test = await MatchService.getAll()
//       // console.log('AAAAAAAAAA',test);
//       expect(test).to.deep.equal(responseMatchAll)
//     })
//     })

//     describe('getFilterInProgress', function () {
//       before(async () => {
//         sinon
//         .stub(Matche, "findAll")
//         .resolves(responseMatchInProgress as Matche[]);
//       });
//     after(()=>{
//       (Matche.findAll as sinon.SinonStub).restore();
//     })
    
//     it('', async function () {
//       let test = await MatchService.getFilterInProgress()
//       // console.log('AAAAAAAAAA',test);
//       expect(test).to.deep.equal(responseMatchInProgress)
//     })
//     })

//     describe('getFilterEnd', function () {
//       before(async () => {
//         sinon
//         .stub(Matche, "findAll")
//         .resolves(responseMatchEnd as Matche[]);
//       });
//     after(()=>{
//       (Matche.findAll as sinon.SinonStub).restore();
//     })
    
//     it('', async function () {
//       let test = await MatchService.getFilterEnd()
//       // console.log('AAAAAAAAAA',test);
//       expect(test).to.deep.equal(responseMatchEnd)
//     })
//     })

//     describe('createNewMatche', function () {
//       before(async () => {
//         sinon
//         .stub(Matche, "create")
//         .resolves(responseCreateMatch as Matche);
//       });
//     after(()=>{
//       (Matche.create as sinon.SinonStub).restore();
//     })
    
//     it('', async function () {
//       let test = await MatchService.createNewMatche({
//         homeTeamId: 16,
//         awayTeamId: 8,
//         homeTeamGoals: 2,
//         awayTeamGoals: 2,
//       })
//       expect(test).to.deep.equal(responseCreateMatch)
//     })
//     })
//     // it('endMatche', async function () {})
//     // it('updateMatch', async function () {})
//     //   it('createNewMatche', async function () {})
//   })
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
// });
