import { Router } from 'express';
import CarController from '../controllers/carController';
import CarService from '../services/carService';
import CarModel from '../models/carModel';
// import MotorcycleController from '../controllers/motorcycleController';
// import MotorcycleService from '../services/motorcycleService';  
// import MotorcycleModel from '../models/motorcycleModel';

const router = Router();
const modelCar = new CarModel();
const serviceCar = new CarService(modelCar);
const controllerCar = new CarController(serviceCar);

router.post('/cars', (req, res) => controllerCar.create(req, res));
router.get('/cars', (req, res) => controllerCar.getAll(req, res));

router.get('/cars/:id', (req, res) => controllerCar.getOne(req, res));
router.put('/cars/:id', (req, res) => controllerCar.update(req, res));
// router.delete('cars/:id', (req, res) => controllerCar.delete(req, res));

// const modelMotorcycle = new MotorcycleModel();
// const serviceMotorcycle = new MotorcycleService(modelMotorcycle);
// const controllerMotorcycle = new MotorcycleController(serviceMotorcycle);

// const motorcycles = 'motorcycles/:id';
// router.post(motorcycles, (req, res) => controllerMotorcycle.create(req, res));
// router.get(motorcycles, (req, res) => controllerMotorcycle.getAll(req, res));
// router.get(motorcycles, (req, res) => controllerMotorcycle.getOne(req, res));
// router.put(motorcycles, (req, res) => controllerMotorcycle.update(req, res));
// router.delete(motorcycles, (req, res) => controllerMotorcycle.delete(req, res));

export default router;