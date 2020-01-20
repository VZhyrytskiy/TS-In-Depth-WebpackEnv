showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Categary {JavaScript, CSS, HTML, TypeScipt, Angular}

function getAllBooks(): Array<any> {
  const books: any[] = [
    { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Categary.JavaScript},
    { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Categary.JavaScript },
    { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Categary.CSS },
    { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Categary.JavaScript }
  ];
  return books;
}

function logFirstAvailable(books: object[]): void {
  const numOfBooks: number = books.length;
  let title: string = '';

  for (const book of books) {
    if (book.available) {
      title = book.title;
      break;
    }
  }

  console.log(`Total number of books: ${numOfBooks}`);
  console.log(`First available books: ${title}`);
}

function getBookTitlesByCategory(category: Categary): Array<string> {
  console.log(`Getting books in category ${Categary[category]}`);

  const books = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

function logBookTitles(titles: string[]) :void {
  for (const title of titles) {
      console.log(title);
  }
}

function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();
  const {title, author} = books[index];
  return [title, author];
}

function calcTotalPages(): bigint {
  const data = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
  ];

  const result = data.reduce((acc: bigint, obj: any) => {
    return acc + BigInt(obj.boks) * BigInt(obj.avgPagesPerBook);
  }, 0n);

  return result;
}


// Task 02.01

logFirstAvailable(getAllBooks());

const titles = getBookTitlesByCategory(Categary.JavaScript);
logBookTitles(titles);

const titleAndAuthor = getBookAuthorByIndex(2);
console.log(titleAndAuthor);

console.log(calcTotalPages());
