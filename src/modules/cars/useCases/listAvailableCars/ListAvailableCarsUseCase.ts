import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/entities/Car';
import { ICarsRepository } from '@modules/cars/infra/repositories/in-memory/ICarsRepository';

interface IRquest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute({ category_id, brand, name }: IRquest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(
      category_id,
      brand,
      name,
    );
    return cars;
  }
}

export { ListAvailableCarsUseCase };
