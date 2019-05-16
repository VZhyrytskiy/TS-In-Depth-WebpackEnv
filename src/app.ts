import { Category } from "./enums";
import { Author, Book, Librarian, Logger, Magazine } from "./interfaces";
import { ReferenceItem, UniversityLibrarian, Shelf } from "./classes";
import RefBook from "./classes/encyclopedia";
import { purge } from "./lib/utility-functions";

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// -----------------------------------------------------

// ----------------------------------------------------- Task 2

function getBookTitlesByCategory(
  category: Category = Category.JavaScript
): Array<string> {
  const books: any[] = getAllBooks();
  const titles: string[] = [];
  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

function logBookTitles(titles: string[]): void {
  for (const title of titles) {
    console.log(title);
  }
}

// ----------------------------------- Task 1

function getAllBooks(): Book[] {
  let books: Book[] = [
    {
      id: 1,
      title: "Refactoring JavaScript",
      author: "Evan Burchard",
      available: true,
      category: Category.JavaScript
    },
    {
      id: 2,
      title: "JavaScript Testing",
      author: "Liang Yuxian Eugene",
      available: false,
      category: Category.JavaScript
    },
    {
      id: 3,
      title: "CSS Secrets",
      author: "Lea Verou",
      available: true,
      category: Category.CSS
    },
    {
      id: 4,
      title: "Mastering JavaScript Object-Oriented Programming",
      author: "Andrea Chiarelli",
      available: true,
      category: Category.TypeScript
    }
  ];
  return books;
}

function logFirstAvailable(books: any[] = getAllBooks()): void {
  const numberOfBooks: number = books.length;
  let title: string = "";
  for (const book of books) {
    if (book.available) {
      title = book.title;
      break;
    }
  }
  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`Title of the first available book: ${title}`);
}

//-------------------------------------------------Task 03
function getBookById(id: number): Book {
  let books = getAllBooks();

  return books.find(book => book.id === id);
}

//--------------------------------------------------Task 04

function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

//----------------------------------------------------Task 05

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Name: ${name}`);
  if (age) {
    console.log(`Age: ${age}`);
  }

  if (city) {
    console.log(`City: ${city}`);
  }
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer: ${customer}`);
  let availableBooks: string[] = [];

  bookIDs.forEach(id => {
    const book = getBookById(id);
    if (book && book.available) {
      availableBooks.push(book.title);
    }
  });

  return availableBooks;
}

//----------------------------------------------------------Task 06
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
  const books = getAllBooks();
  if (args.length == 0) {
    return [];
  } else if (args.length == 1) {
    if (typeof args[0] === "string") {
      return books
        .filter(book => book.author === args[0])
        .map(book => book.title);
    } else if (typeof args[0] === "boolean") {
      return books
        .filter(book => book.available === args[0])
        .map(book => book.title);
    }
  } else if (args.length == 2) {
    if (typeof args[0] === "number" && args[1] === "boolean") {
      return books
        .filter(book => book.available === args[1] && book.id === args[0])
        .map(book => book.title);
    }
  }
}

//------------------------------------------------Task 07
function printBook(book: Book): void {
  console.log(`"${book.title}" by ${book.author}`);
}

//--------------------------------------------------------

// Task 01
// logFirstAvailable(getAllBooks());

//Task 02
//const titles = getBookTitlesByCategory(Category.JavaScript);
//logBookTitles(titles);

//Task 03
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach((title: string, index: number) => console.log(`Book #${index + 1}: ${title}`));

// const book = getBookById(10);
// console.log(book);

//Task 04
// const myID = createCustomerID('Ann', 10);
// console.log(myID)

// let idGenerator: {(name: string, id: number): string} = (name:string, id:number) => `${name}${id}`;
// console.log(idGenerator('George', 20));

// idGenerator = createCustomerID;
// console.log(idGenerator('Giwi', 20));

//Task 05
// createCustomer('Anna');
// createCustomer('Boris', 20);
// createCustomer('John', 20, 'Kiev');

// const titles = getBookTitlesByCategory();
// titles.forEach((title: string, index: number) => console.log(`Book #${index + 1}: ${title}`));

// logFirstAvailable();
// const myBooks: string[] = checkoutBooks('Anna', 1, 2, 4);
// console.log(myBooks);

// Task 06

// let checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

//Task 07
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// }

// printBook(myBook);
// myBook.markDamaged("missing back cover");

// Task 08
const logDamage: Logger = reason => console.log(`Damaged: ${reason}`);

logDamage("missing book cover");

// Task 09
// const favoriteAuthor: Author = {
//   email: "gmartin@gmail.com",
//   name: "George Martin",
//   numBooksPublished: 15
// }

// const favoriteLibrarian: Librarian = {
//   name: "Anna",
//   email: "anna@gmail.com",
//   assistCustomer: name => console.log(`Hello, ${name}!`),
//   department: "Fantasy"
// }

// Task 10

// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Boris";
// favoriteLibrarian.assistCustomer("Anna");

// Task 11-13

// const ref: ReferenceItem = new RefBook("TypeScript in Depth", 2019, 3);
// ref.printItem();
// ref.publisher = 'Random Publisher';
// console.log(ref.publisher);
// ref.printCitation();

//Task 18-19

const inventory: Array<Book> = [
  {
    id: 10,
    title: "The C Programming Language",
    author: "K & R",
    available: true,
    category: Category.Software
  },
  {
    id: 11,
    title: "Code Complete",
    author: "Steve McConnell",
    available: true,
    category: Category.Software
  },
  {
    id: 12,
    title: "8-Bit Graphics with Cobol",
    author: "A. B.",
    available: true,
    category: Category.Software
  },
  {
    id: 13,
    title: "Cool autoexec.bat Scripts!",
    author: "C. D.",
    available: true,
    category: Category.Software
  }
];

// const books: Array<Book> = purge(inventory)

// console.log(books);

// const nums: number[] = purge([1, 2, 3, 4]);
// console.log(nums);

const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook = bookShelf.getFirst();
console.log(firstBook);

const magazines: Array<Magazine> = [
  { title: "Programming Language Monthly", publisher: "Code Mags" },
  { title: "Literary Fiction Quarterly", publisher: "College Press" },
  { title: "Five Points", publisher: "GSU" }
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(m => magazineShelf.add(m));
console.log(magazineShelf.getFirst());

//Task 20
magazineShelf.printTitles();
console.log(magazineShelf.find("Five Points"));