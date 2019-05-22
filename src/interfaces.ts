import { Category } from "./enums";

interface DamageLogger {
  (reason: string): void;
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamage?: DamageLogger;
}

// if we define interface twice, typescript merges them into one
interface Person {
  name: string;
}
// define Person second time
interface Person {
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (name: string) => void;
}

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
}

interface LibMgrCallback {
  (err: Error, titles: string[]): void;
}

export {
  DamageLogger as Logger,
  Book,
  Person,
  Author,
  Librarian,
  Magazine,
  ShelfItem,
  LibMgrCallback
};
