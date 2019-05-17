import { Category } from "./enums";
import {Book} from "./interfaces";


export let books: Book[] = [
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

export let inventory: Book[] = [
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
