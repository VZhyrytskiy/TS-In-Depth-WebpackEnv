abstract class ReferenceItem {
  private _publisher: string;

  static department: string = "Science Fiction";

  constructor(public title: string, protected year: number) {
    console.log(`Creating a new ReferenceItem...`);
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  printItem(): void {
    console.log(
      `"${this.title}" was published in ${this.year} in the "${
        ReferenceItem.department
      }" department`
    );
  }

  abstract printCitation(): void;
}

export { ReferenceItem };
