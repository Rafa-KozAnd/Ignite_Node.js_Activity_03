import { Repository } from 'typeorm';

import { ICreateRentalDTO } from '@modules/rentals/dtos/ICreateRentalDTO';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import dataSource from '@shared/infra/typeorm';

import { Rental } from '../entities/Rental';

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;
  constructor() {
    this.repository = dataSource.getRepository(Rental);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOneBy({ car_id });

    return openByCar;
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOneBy({ user_id });

    return openByCar;
  }
  async create({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
    });

    await this.repository.save(rental);

    return rental;
  }
}

export { RentalsRepository };
