export interface Cost {
  date: Date;
  cost: number;
  currency: string;
}

export interface Aggregate<T extends Record<string, any>> {
  filter?: Record<keyof T, string | number | boolean>;
}
