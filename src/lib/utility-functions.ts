import { Category } from "../enums";
import { LibMgrCallback, Book } from "../interfaces";

function purge<T>(arr: Array<T>): Array<T> {
  return arr.slice(2);
}

export function getAllBooks(): Book[] {
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

export function getBookTitlesByCategory(
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

export function getBooksByCategory(
  category: Category,
  callback: LibMgrCallback
) {
  setTimeout(() => {
    try {
      const titles: string[] = getBookTitlesByCategory(category);
      if (titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error("No Books Found");
      }
    } catch (error) {
      callback(error, null);
    }
  }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
  if (err) {
    console.log(err.message);
  } else {
    console.log(titles);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const titles: string[] = getBookTitlesByCategory(category);
        if (titles.length > 0) {
          resolve(titles);
        } else {
          reject("No Books Found");
        }
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });  
}

export async function logSearchResults(category: Category) {
  const result = await getBooksByCategoryPromise(category);
  console.log(result);
}

export { purge };
