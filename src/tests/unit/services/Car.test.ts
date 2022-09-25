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

describe('get/cars serviceCar', () => {
  const model = new CarModel();
  const serviceCar = new CarService(model);
  describe('getAll cars', () => {
    beforeEach(() => {
      sinon.stub(model, 'read').resolves(carsMock);
    })
    afterEach(sinon.restore);
    it('returns an array', async () => {
      const cars = await serviceCar.getAll();
      expect(cars).to.be.an('array');
      expect(cars).to.have.length(2);
    });
  });
});
