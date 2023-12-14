export class Person {
  // public name: string;
  // private address: string;

  // Short form of initializing class properties

  constructor(public name: string, private address: string) {
    this.name = name;
    this.address = address;
  }
}

const ironman = new Person("Tony Stark", "Malibu");

console.log({ ironman });
