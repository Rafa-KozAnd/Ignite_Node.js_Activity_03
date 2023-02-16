/* eslint-disable quotes */
import { v4 as uuidV4 } from 'uuid';
import { hash } from 'bcrypt';

import dataSource, { createConnection } from '..';

async function create() {
  await createConnection('localhost');

  const id = uuidV4();
  const password = await hash('admin', 8);

  await dataSource.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, "driver_license")
      values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXX')
    `,
  );

  await dataSource.destroy;
}

create().then(() => console.log('User admin created!'));
