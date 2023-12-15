function classDecorator<T extends { new (...args:any[]):{}}>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class SuperClass {
  public myProperty: string = "myProperty";

  print() {
    console.log("hello from SuperClass");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);