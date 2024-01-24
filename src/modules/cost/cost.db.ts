import { faker } from '@faker-js/faker';
import { Cost } from './cost.types';

function createRandomCost(): Cost {
  return {
    date: faker.date.past(),
    cost: faker.number.int({ min: 1, max: 1000 }),
    currency: faker.finance.currency().code,
  };
}

function sortByDate(a: Cost, b: Cost) {
  if (a.date > b.date) {
    return 1;
  }

  if (b.date > a.date) {
    return -1;
  }

  return 0;
}

export const costs: Array<Cost> = faker.helpers.multiple(createRandomCost, { count: 10 }).sort(sortByDate);
