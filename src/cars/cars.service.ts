import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuidv4(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuidv4(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuidv4(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found.`);
    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const newCar: Car = { id: uuidv4(), ...createCarDto };
    this.cars.push(newCar);
    return newCar;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...car, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  public delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
