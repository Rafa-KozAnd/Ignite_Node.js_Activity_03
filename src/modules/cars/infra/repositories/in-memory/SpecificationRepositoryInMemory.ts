/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '@modules/cars/Repositories/ISpecificationsRepository';

import { Specification } from '../../entities/Specification';

class SpecificationRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specification[] = [];

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });

    this.specifications.push(specification);

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter((specification) =>
      ids.includes(specification.id));

    return allSpecifications;
  }

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find((specication) => specication.name === name);
  }
}

export { SpecificationRepositoryInMemory };
