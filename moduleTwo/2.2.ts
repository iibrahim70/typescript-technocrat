{
  // interface

  // object
  type UserOne = {
    name: string;
    phone: number;
  };

  type UserWithRollOne = UserOne & { roll: number };

  interface UserTwo {
    name: string;
    phone: number;
  }

  interface UserWithRollTwo extends UserTwo {
    roll: number;
  }

  const userOne: UserWithRollTwo = {
    name: "ibrahim",
    roll: 1,
    phone: 22,
  };

  // in js array is a typeof object

  type RollNum = number[];

  interface RollNumTwo {
    [index: number]: number;
  }

  const roll: RollNumTwo = [1, 2, 3, 4, 5];

  // function
  type Add = (num: number, numTwo: number) => number;

  interface AddTwo {
    (num: number, numTwo: number): number;
  }

  const add: AddTwo = (num, numTwo) => num + numTwo;

  console.log(add(3, 5));
}
