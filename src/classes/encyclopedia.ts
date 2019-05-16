import { ReferenceItem } from "./referenceitem";

export default class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: number) {
    super(title, year);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} ${this.year}`);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}
