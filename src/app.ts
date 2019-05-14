showHello('greeting', 'TypeScript'); 

function showHello(divName:string, name:string) {
  const elt = document.getElementById(divName); 
  elt.innerText = `Hello from ${name}`; 
}

// ----------------------------------------------------- Task 2

enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

function getBookTitlesByCategory(category: Category): Array<string> {
  const books: any[] = getAllBooks();
  const titles: string[] = [];
  for(const book of books) {    
    if (book.category === category) {
      titles.push(book.title);
    }
  }
  
  return titles;
}

function logBookTitles(titles: string[]): void {
  for(const title of titles) {
    console.log(title);
  }
}

// ----------------------------------- Task 1

function getAllBooks(): any[] {
  let books: any[] = 
  [ 
    {
      title: 'Refactoring JavaScript', 
      author: 'Evan Burchard', 
      available: true,
      category: Category.JavaScript
    },  
    {
      title: 'JavaScript Testing', 
      author: 'Liang Yuxian Eugene', 
      available: false,
      category: Category.JavaScript
    },  
    {
      title: 'CSS Secrets', 
      author: 'Lea Verou', 
      available: true,
      category: Category.CSS      
    },  
    {
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli', 
      available: true,
      category: Category.TypeScript
    }
  ]
  return books; 
}

function logFirstAvailable(books: any[]): void {
  const numberOfBooks: number = books.length;
  let title: string = '';
  for(const book of books) {
    if (book.available) {
      title = book.title;
      break;
    }
  }
  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`Title of the first available book: ${title}`);
}

//--------------------------------------------------------

// logFirstAvailable(getAllBooks());
const titles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(titles);
