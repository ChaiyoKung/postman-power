import { faker } from '@faker-js/faker';
import { User } from './user.types';

export function createRandomUser(): User {
  const createdAt = faker.date.past();
  return {
    id: faker.string.uuid(),
    name: faker.internet.displayName(),
    email: faker.internet.email(),
    createdAt: createdAt,
    updatedAt: faker.date.between({ from: createdAt, to: new Date() }),
  };
}

export const users: Array<User> = faker.helpers.multiple(createRandomUser, { count: 10 });
