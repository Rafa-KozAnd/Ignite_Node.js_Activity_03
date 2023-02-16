import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '@modules/cars/Repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRquest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: IRquest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists!');
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
