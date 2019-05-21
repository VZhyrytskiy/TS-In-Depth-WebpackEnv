// Class decorator
export function sealed(name: string) {
  return function(target: Function): void {
    console.log(`Sealing the constructor ${name}`);
    Object.seal(target);
    Object.seal(target.prototype);
  };
}

// Class decorator
export function logger<TFunction extends Function>(
  target: TFunction
): TFunction {
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

// method decorator
export function writable(isWratible: boolean) {
  return function(
    target: Object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(`Decorate method: ${propertyName}`);
    descriptor.writable = isWratible;
  };
}

// method decorator
export function timeout(ms: number = 0) {
  return function(
    target: Object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMetod = descriptor.value;
    descriptor.value = function(...args) {
      setTimeout(() => {
        return originalMetod.apply(this, args);
        // or ?
        // target[propertyName].apply(this.args);
      }, ms);
    };
    return descriptor;
  };
}

// parameter decorator
export function logParameter(
  target: Object,
  methodName: string,
  paramIndex: number
): void {
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);
  const key = `${methodName}_decor_params_indexes`;

  if (Array.isArray(target[key])) {
    target[key].push(paramIndex);
  } else {
    target[key] = [paramIndex];
  }
}

// method parameter
export function logMethod(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMetod = descriptor.value;

  descriptor.value = function(...args) {
    const indexes = target[`${methodName}_decor_params_indexes`];
    Array.isArray(indexes) &&
      args.forEach((arg, i) => {
        indexes.includes(i) &&
          console.log(
            `Method: ${methodName}, ParamIndex: ${i}, ParamValue: ${arg}`
          );
      });
    return originalMetod.apply(this, args);
  };

  return descriptor;
}
