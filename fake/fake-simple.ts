import { faker } from '@faker-js/faker';

export class FakeSimple {
  static boolean = (probability = 0.5): boolean => faker.datatype.boolean(probability);

  static firstName = (): string => faker.person.firstName();
  static lastName = (): string => faker.person.lastName();

  static bookTitle = (): string => faker.book.title();
  static price = (min = 1, max = 1500): string => faker.commerce.price({ min, max, dec: 0 });

  static dateInPast = (min: number, max: number): Date => faker.date.past({ years: { min, max } });
}
