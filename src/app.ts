showHello("greeting", "TypeScript");

function showHello(divName: string, name: string): void {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category {
  JavaScript,
  CSS,
  HTML,
  TypeScript,
  Angular
}

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
    category: Category.JavaScript
  }
];

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

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

const getAllBooks = (): Book[] => {
  return books;
};

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

const getBooksTitleOfCategory = (
  category: Category = Category.JavaScript
): Array<string> => {
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

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string): void {
    console.log(`${this.name} is assist ${custName}`);
  }
}

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
console.log(getBooksTitleOfCategory());
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
const logDamage: DamageLogger = reason =>
  console.log(`Damage reported ${reason}`);

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
  assistCustomer: custName => console.log(` ${this.name} assist ${custName}`)
};

// Task 10
const favoritLibrarian: Librarian = new UniversityLibrarian();
favoritLibrarian.name = "Anna";
favoritLibrarian.assistCustomer("Boris");
