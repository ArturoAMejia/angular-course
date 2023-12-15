export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Arturo Mejia",
};

const passenger2: Passenger = {
  name: "Armando Mejia",
  children: ["Arturo", "Armando"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(howManyChildren);
};

printChildren(passenger2);
