import { DataSource } from 'typeorm';

import { User } from '../../../modules/accounts/infra/typeorm/entities/User';
import { Car } from '../../../modules/cars/infra/entities/Car';
import { Category } from '../../../modules/cars/infra/entities/Category';
import { Specification } from '../../../modules/cars/infra/entities/Specification';

console.log({ __dirname });

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: false,
  logging: false,
  entities: [Category, Specification, User, Car],
  migrations: [`${__dirname}/migrations/*.ts`],
});

export function createConnection(host = 'database'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
