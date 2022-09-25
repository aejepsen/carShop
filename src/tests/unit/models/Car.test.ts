import { expect } from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import { ICar } from '../../../interfaces/ICar';
import CarModel from '../../../models/carModel';

const invalidId = 'Id must have 24 hexadecimal characters';

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

describe('Model/Car', () => {
  const model = new CarModel();
  describe('/get/cars', () => {
    beforeEach(() => {
      sinon.stub(Model, 'find').resolves(carsMock);
    });
    afterEach(sinon.restore);
    it('Return an array', async () => {
      const cars = await model.read();
      expect(cars).to.be.an('array');
      expect(cars).to.have.length(2);
    });
  });
  describe('/get/cars/:id', () => {
    beforeEach(() => {
      sinon.stub(Model, 'findOne').resolves(carMockId);
    });
    afterEach(sinon.restore);
    it('get/car/:id is correct', async () => {
      const car = await model.readOne(carMockId._id);
      expect(car).to.be.an('object');
      expect(Object.keys(car as ICar)).to.have.length(7);
    });
    it('/get/cars/:id return error', async () => {
      try {
        await model.readOne('id_invalido');
      } catch (e: any) {
        expect(e).to.have.property('message', invalidId);
        expect(e).to.have.property('code', 400);
      }
    });
  });
    describe('/get/:id create car', () => {
    beforeEach(() => {
      sinon.stub(Model, 'create').resolves(carMockId);
    });
    afterEach(sinon.restore);
    it('Created car', async () => {
      const car = await model.create(carMock);
      expect(car).to.be.deep.equal(carMockId);
    });
  });
});
