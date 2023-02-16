import { In, Repository } from 'typeorm';

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '@modules/cars/Repositories/ISpecificationsRepository';
import dataSource from '@shared/infra/typeorm';

import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = dataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO) {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ name });

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findBy({ id: In(ids) });

    return specifications;
  }
}

export { SpecificationsRepository };
