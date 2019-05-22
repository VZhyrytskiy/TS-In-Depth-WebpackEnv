import { books } from "../data";
import { Book, LibMgrCallback } from "../interfaces";
import { Category } from "../enums";

// Generics
// conventionally represented by the letter T

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.slice(2);
}

export function showHello(divName: string, name: string): void {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

export const getAllBooks = (): Book[] => books;

export const logFirstAbailable = (books: Book[] = getAllBooks()): void => {
  const numberOfBooks: number = books.length;
  let titleFirstAvailable: string = "";
  for (const book of books) {
    if (book.available) {
      titleFirstAvailable = book.title;
      break;
    }
  }
  console.log(`Total Books ${numberOfBooks}`);
  console.log(`Total of First Available Books ${titleFirstAvailable}`);
};

export const getBooksTitleOfCategory = (category: Category): Array<string> => {
  const books: Book[] = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }
  return titles;
};

export const logBookTitles = (titles: string[]): void => {
  for (const title of titles) {
    console.log(title);
  }
};

export const getById = (id: number): Book | undefined => {
  const books = getAllBooks();
  return books.find(book => book.id === id);
};

export const createCustomerId = (name: string, id: number): string =>
  `${name} ${id}`;

export const createCustomer = (
  name: string,
  age?: number,
  city?: string
): void => {
  console.log(`customer ${name}`);
  age && console.log(`Age ${age}`);
  city && console.log(`City ${city}`);
};

export const checkoutBooks = (
  customer: string,
  ...booksIds: number[]
): string[] => {
  console.log(`Customer name: ${customer}`);

  const titles: string[] = [];

  for (let id of booksIds) {
    const book = getById(id);
    if (book && book.available) {
      titles.push(book.title);
    }
  }
  return titles;
};

// args with "tuple" type
export const f = (...args: [number, string]): void => {
  console.log(args[0]);
  console.log(args[1]);
};

// Function Overloading
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(param: string | boolean): string[] {
  const books = getAllBooks();
  switch (typeof param) {
    case "string": {
      return books
        .filter(book => book.author === param)
        .map(book => book.title);
    }
    case "boolean": {
      return books
        .filter(book => book.available === param)
        .map(book => book.title);
    }
  }
}

export const getBooksByCategory = (
  category: Category,
  callback: LibMgrCallback
): void => {
  setTimeout(() => {
    try {
      const titles: string[] = getBooksTitleOfCategory(category);
      if (titles.length > 0) {
        callback(null, titles);
      } else throw new Error("No books found.");
    } catch (error) {
      callback(error, null);
    }
  }, 2000);
};

export const logCategorySearch: LibMgrCallback = (err, titles): void => {
  if (err) console.log(err.message);
  else titles.forEach(title => console.log(title));
};
