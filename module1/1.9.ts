{
  // type alias

  // for object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: number;
    adress: string;
  };

  const studentOne: Student = {
    name: "Mezba",
    age: 15,
    gender: "Male",
    contactNo: 123456789,
    adress: "Dhaka",
  };

  const studentTwo: Student = {
    name: "Mir",
    age: 15,
    gender: "Male",
    adress: "Dhaka",
  };

  // for string, boolean
  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Himel";
  const isAdmin: IsAdmin = false;

  // for function
  type Add = (numOne: number, numTwo: number) => number;

  const add: Add = (numOne, numTwo) => numOne + numTwo;
}
