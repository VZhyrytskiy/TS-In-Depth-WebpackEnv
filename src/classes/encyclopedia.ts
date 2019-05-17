import { ReferenceItem } from "./referenceitem";
import { logMethod, logParameter, positiveInteger } from "../decorators";

export default class Encyclopedia extends ReferenceItem {
  private _copies: number;

  get copies() {
    return this._copies;
  }

  @positiveInteger
  set copies(value: number) {
    this._copies = value;
  }
  
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

  @logMethod
  printItem2(@logParameter itemName: string): void {
    super.printItem();
    console.log(`Edition: ${this.edition} ${this.year}`);
  }

}
