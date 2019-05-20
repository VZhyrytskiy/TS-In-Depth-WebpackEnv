export function sealed(name: string) {
  return function(target: Function): void {
    console.log(`Sealing the constructor ${name}`);
    Object.seal(target);
    Object.seal(target.prototype);
  };
}

function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function() {
    console.log(`Creating new instance`);
    console.log(target.name);
    this.age = 30;
  };

  newConstructor.prototype = Object.create(target.prototype);

  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  };
  return <TFunction>newConstructor;
}

export { logger };
