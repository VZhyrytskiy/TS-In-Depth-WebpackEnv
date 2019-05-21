import { ReferenceItem } from "./referenceItem";
import { positiveInteger } from "../decorators";

export class Encyclopedia extends ReferenceItem {
  private _copies: number = 0;

  constructor(newTitle: string, newYear: number, public edition: number) {
    super(newTitle, newYear);
  }

  @positiveInteger
  set copies(value: number) {
    this._copies = value;
  }

  get copies(): number {
    return this._copies;
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }
  printCitation() {
    console.log(`${this.title + ": " + this.year}`);
  }
}
