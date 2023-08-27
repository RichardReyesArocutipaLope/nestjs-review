import { Car } from 'src/cars/interface/car.interface';
import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    brand: 'Toyota',
    model: 'Corolla',
  },

  {
    id: uuidv4(),
    brand: 'Hondaa',
    model: 'civic',
  },

  {
    id: uuidv4(),
    brand: 'Chevrolet',
    model: 'camaro',
  },

  {
    id: uuidv4(),
    brand: 'AUDI',
    model: 'camaro',
  },
];
