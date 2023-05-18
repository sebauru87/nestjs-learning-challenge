import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const baseUrl = 'http://localhost:3000/api/v1';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  //   it('find - should successfully retrieve the chain {find function with params age: 8 & breed: Pitbull}', (done) => {
  it('find - should successfully retrieve the chain {find function with params age: 8 & breed: Pitbull}', () => {
    // request(baseUrl)
    //   .get('/dog')
    //   .query({ breed: 'Pitbull', age: 8 })
    //   //   .expect(400)
    //   //   .expect('find function with params breed: Pitbull & age: 8');
    // //   .expect(function (err, res) {
    // //     console.log('🚀 ~ file: challenge1.e2e-spec.ts:34 ~ res:', err, res);
    // //     // expect(200);
    // //     // expect(res.statusCode).toBe(200);
    // //     // expect(res.statusCode).to.be.equal(200);
    // //     // expect(res.text).to.be.string(
    // //     //   'find function with params breed: Pitbull & age: 8',
    // //     // );
    // //   });
    // // done();

    return request(app.getHttpServer())
      .get('/dog')
      .query({ breed: 'Pitbull', age: 8 })
      .expect(200)
      .expect('find function with params breed: Pitbull & age: 8');
  });

  //   it('create - should successfully retrieve the chain {create function with properties, breed: Poddle, age: 12 & color: white}', (done) => {
  //   it('create - should successfully retrieve the chain {create function with properties, breed: Poddle, age: 12 & color: white}', () => {
  //     return request(app.getHttpServer())
  //       .get('/dog')
  //       .query({ breed: 'Poddle', age: 12, color: 'white' })
  //       .expect(200)
  //       .expect('find function with params breed: Pitbull & age: 8');

  //     //     request(baseUrl)
  //     //       .post('/dog')
  //     //       .send({ breed: 'Poddle', age: 12, color: 'white' })
  //     //       .set('Accept', 'application/json')
  //     //       .set('Content-Type', 'application/json')
  //     //       .end(function (err, res) {
  //     //         // expect(res.statusCode).to.be.equal(201);
  //     //         // expect(res.text).to.be.string(
  //     //         //   'create function with properties, breed: Poddle, age: 12 & color: white',
  //     //         // );
  //     //         done();
  //     //       });
  //   });
});
