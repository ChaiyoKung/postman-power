import { faker } from '@faker-js/faker';
import { Cost } from './cost.types';

function createRandomCost(): Cost {
  return {
    date: faker.date.past(),
    cost: faker.number.int({ min: 1, max: 1000 }),
    currency: 'USD',
  };
}

export const costs: Array<Cost> = faker.helpers
  .multiple(createRandomCost, { count: 10 })
  .sort((a, b) => (a.date > b.date ? 1 : -1));
