const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
};

const character: Character = {
  name: "Paladin",
  skills: ["Bash", "Counter", "Healing"],
  hp: 100,
};

character.hometown = 'Rivendell'

console.table(character);

export {};
