import { Schema, model as MongoModel } from 'mongoose';
import Model from './model';
import { ICar } from '../interfaces/ICar';

const CarSchema = new Schema<ICar>({
  buyValue: Number,
  color: String,
  doorsQty: Number,
  model: String,
  seatsQty: Number,
  status: Boolean,
  year: Number,
}, { versionKey: false });

class CarModel extends Model<ICar> {
  constructor(model = MongoModel<ICar>('Car', CarSchema)) {
    super(model);
  }
}

export default CarModel;
