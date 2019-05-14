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

let books: object[] = [
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

const getAllBooks = (): any[] => {
  return books;
};

const logFirstAbailable = (books: any[] = getAllBooks()): void => {
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
  const books: any[] = getAllBooks();
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

const getById = (id: number): any => {
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

<<<<<<< HEAD
// args with "tuple" type
=======
>>>>>>> 7ffb008937b3d20f7f5af32b736d0eefc5d2a4a3
const f = (...args: [number, string]): void => {
  console.log(args[0]);
  console.log(args[1]);
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
console.log(getBooksTitleOfCategory());
console.log(getBooksTitleOfCategory(Category.CSS));

console.log(checkoutBooks("Peter", 1, 2, 3));
<<<<<<< HEAD

f(5, "five");
=======
>>>>>>> 7ffb008937b3d20f7f5af32b736d0eefc5d2a4a3
