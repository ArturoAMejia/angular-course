export class Person {
  // public name: string;
  // private address: string;

  // Short form of initializing class properties

  constructor(public name: string, private address: string = "No address") {
    // this.name = name;
    // this.address = address;
  }
}

// export class Hero extends Person {
//   constructor(
//     public realName: string,
//     public age: number,
//     public alterEgo: string
//   ) {
//     super(realName, 'New York');
//   }
// }

export class Hero {
  constructor(
    public realName: string,
    public age: number,
    public alterEgo: string,
    public person: Person
  ) {}
}
const tony = new Person("Tony Stark", "New York");
const ironman = new Hero("Tony Stark", 45, "Ironman", tony);

console.log(ironman);
