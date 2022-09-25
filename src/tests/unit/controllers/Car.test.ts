import { expect } from 'chai';
// import { Model } from 'mongoose';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { ICar } from '../../../interfaces/ICar';
import CarModel from '../../../models/carModel';
import CarService from '../../../services/carService';
import CarController from '../../../controllers/carController';

const carMockId = {
  "_id": "4edd40c86762e0fb12000003",
  "model": "Fiat Uno",
  "year": 1963,
  "color": "blue",
  "buyValue": 3500,
  "seatsQty": 4,
  "doorsQty": 4
}

const carMock = {
  "model": "Fiat Uno",
  "year": 1963,
  "color": "blue",
  "buyValue": 3500,
  "seatsQty": 4,
  "doorsQty": 4
}

const carsMock = [
  {
    "_id": "4edd40c86762e0fb12000003",
    "model": "Fiat Uno",
    "year": 1963,
    "color": "blue",
    "buyValue": 3500,
    "seatsQty": 4,
    "doorsQty": 4
  },
  {
    "_id": "631eddf0e6a4b59fde611052",
    "model": "Bettle",
    "year": 1974,
    "color": "Ocre",
    "buyValue": 0,
    "seatsQty": 4,
    "doorsQty": 2,
  },
];

describe('Controller/Car', () => {
  const model = new CarModel();
  const serviceCar = new CarService(model);
  const controllerCar = new CarController(serviceCar);
  const req = {} as Request;
  const res = {} as Response;
  describe('/get/  getAll cars', () => {
    beforeEach(() => {
      sinon.stub(serviceCar, 'getAll').resolves(carsMock);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
    afterEach(sinon.restore);
    it('returns status 200', async () => {
      await controllerCar.getAll(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
    });
  });
});
