export function sealed(name: string) {
  return function(target: Function) {
    console.log(`Sealing the constructor ${name}`);
    Object.seal(target);
  };
}

export function logger<TFunction extends Function>(
  target: TFunction
): TFunction {
  const newConstructor: Function = function() {
    console.log(`Creating new instance`);
    console.log(target.name);

    this.age = 30;
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;

  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  };

  return <TFunction>newConstructor;
}

export function writable(isWritable: boolean) {
  return function(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(`Decorate method: ${propertyKey}`);
    descriptor.writable = isWritable;
  };
}

export function timeout(ms: number = 0) {
  return function(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    var originalMethod = target[propertyKey];
    descriptor.value = function(...args) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };
    return descriptor;
  };
}

export function logParameter(
  target: Object,
  paramName: string,
  paramIndex: number
) {
  const key = `${paramName}_decor_params_indexes`;

  if (Array.isArray(target[key])) {
    target[key].push(paramIndex);
  } else {
    target[key] = [paramIndex];
  }
}

export function logMethod(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args) {
    const indexes = target[`${methodName}_decor_params_indexes`];

    if (Array.isArray(indexes)) {
      args.forEach((arg, index) => {
        console.log(
          `Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`
        );
      });
    }
  };
}

function makeProperty<T>(
  prototype: any,
  propertyName: string,
  getTransformer: (value: any) => T,
  setTransformer: (value: any) => T
) {
  const values = new Map<any, T>();

  Object.defineProperty(prototype, propertyName, {
    set(firstValue: any) {
      Object.defineProperty(this, propertyName, {
        get() {
          if (getTransformer) {
            return getTransformer(values.get(this));
          } else {
            values.get(this);
          }
        },
        set(value: any) {
          if (setTransformer) {
            values.set(this, setTransformer(value));
          } else {
            values.set(this, value);
          }
        },
        enumerable: true
      });
      this[propertyName] = firstValue;
    },
    enumerable: true,
    configurable: true
  });
}

export function format(pref: string = "Mr./Mrs.") {
  return function(target: Object, propertyName: string) {
    makeProperty(
      target,
      propertyName,
      value => `${pref} ${value}`,
      value => value
    );
  };
}

export function positiveInteger(
  target: object,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalSetter = descriptor.set;

  descriptor.set = function(value: number) {
    if (value <= 0 || !Number.isInteger(value)) {
      throw new Error(
        `Invalid value. ${propertyName} must be a positive integer`
      );
    }

    originalSetter.call(this, value);
  };

  return descriptor;
}
