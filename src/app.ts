import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { books, inventory } from "./data";
import {
  UniversityLibrarian,
  ReferenceItem,
  Encyclopedia as RefBook,
  Shelf,
  Encyclopedia
} from "./classes";

import { purge } from "./lib/utility-functions";

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string): void {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

const getAllBooks = (): Book[] => books;

const logFirstAbailable = (books: Book[] = getAllBooks()): void => {
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

const getBooksTitleOfCategory = (category: Category): Array<string> => {
  const books: Book[] = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }
  return titles;
};

const logBookTitles = (titles: string[]): void => {
  for (const title of titles) {
    console.log(title);
  }
};

const getById = (id: number): Book | undefined => {
  const books = getAllBooks();
  return books.find(book => book.id === id);
};

const createCustomerId = (name: string, id: number): string => `${name} ${id}`;

const createCustomer = (name: string, age?: number, city?: string): void => {
  console.log(`customer ${name}`);
  age && console.log(`Age ${age}`);
  city && console.log(`City ${city}`);
};

const checkoutBooks = (customer: string, ...booksIds: number[]): string[] => {
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
const f = (...args: [number, string]): void => {
  console.log(args[0]);
  console.log(args[1]);
};

// Function Overloading
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(param: string | boolean): string[] {
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

const printBook = (book: Book): void => {
  console.log(`${book.title} by ${book.author}`);
};

// ==========================================
// Task 01
logFirstAbailable(getAllBooks());

// Task 02
const titles: string[] = getBooksTitleOfCategory(Category.JavaScript);
logBookTitles(titles);

// Task 03

getAllBooks().forEach((el, i) => console.log(`${i} - ${el.title}`));

const bookById = getById(3);
console.log(bookById);

let myId = createCustomerId("Ann", 10);
console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id} - ${name}`;

idGenerator = createCustomerId;
myId = idGenerator("Boris", 22);
console.log(myId);

// Task 05
// createCustomer("Ivan");
// createCustomer("Ivan", 22);
// createCustomer("Ivan", 22, "Las Vegas");
console.log(getBooksTitleOfCategory(Category.CSS));

console.log(checkoutBooks("Peter", 1, 2, 3));

f(5, "five");

// Task 06
console.log(getTitles(true));
console.log(getTitles("Lea Verou"));
console.log(getById(23));

// Task 07
const myBook: Book = {
  id: 5,
  title: "Colors, Backgrounds, and Gradients",
  author: "Eric A. Meyer",
  available: true,
  category: Category.CSS,
  pages: 234,
  markDamage: (reason: string): void => console.log(`Damage: ${reason}`)
};

printBook(myBook);
myBook.markDamage("missing back cover");

// Task 08
const logDamage: Logger = reason => console.log(`Damage reported ${reason}`);

logDamage("Some damage description");

// Task 09
const favoriteAuthor: Author = {
  name: "Anna",
  email: "anna@example.com",
  numBooksPublished: 12
};

const favoriteLibrarian: Librarian = {
  name: "Boris",
  email: "boris@epample.com",
  department: "Classical Literature",
  assistCustomer(custName) {
    console.log(` ${this.name} assist ${custName}`);
  }
};

// Task 10
const favoriteLibrarian2: Librarian = new UniversityLibrarian();
favoriteLibrarian2.name = "Anna";
favoriteLibrarian2.assistCustomer("Boris");
favoriteLibrarian2["printLibrarian"]();
console.log(favoriteLibrarian2);

// Task 11
// const ref: ReferenceItem = new ReferenceItem(ReferenceItem title", 2019);
// ref.printItem();

// ref.publisher = "Custom publisher";
// console.log(ref.publisher);

// Task 12
const refBook: RefBook = new RefBook("WorldPress", 2000, 10);
refBook.printItem();
console.log(refBook);

//Task 13
refBook.printCitation();

class User {
  private isTeacher: boolean;
  // protected - accessible only within the class or extended class

  constructor(public name: string, protected age: number = 25) {}

  get getAge(): number {
    return this.age;
  }

  public set setTitle(title: boolean) {
    //   private - accessible within class
    this.isTeacher = title;
    console.log(this.isTeacher);
  }
}

const user = new User("Roman");

console.log(user);
console.log(user.getAge);
user.setTitle = true;

// Task 18

// const books1: Array<Book> = purge<Book>(inventory);
// console.log(books1);

// const nums: number[] = purge<number>([1, 2, 3, 4]);
// console.log(nums);

// Task 19
const bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));
const firsBook: Book = bookShelf.getFirst();
console.log(firsBook);

const magazines: Array<Magazine> = [
  { title: "Programming Language Monthly", publisher: "Code Mags" },
  { title: "Literary Fiction Quarterly", publisher: "College Press" },
  { title: "Five Points", publisher: "GSU" }
];

const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

magazines.forEach(mag => magazineShelf.add(mag));
const firstMag: Magazine = magazineShelf.getFirst();
console.log(firstMag);

// Task 20
console.log(magazineShelf.find("Five Points"));

// Task 23
const librarian: UniversityLibrarian = new UniversityLibrarian();
librarian.assistFaculty = () => console.log(123);

// will be TypeError: Cannot assign to read only property 'teachCommunity'
// librarian.teachCommunity = () => console.log("456"); 

// Task 24
const enc = new Encyclopedia("Harry Potter", 2019, 3);
enc.printItem();
