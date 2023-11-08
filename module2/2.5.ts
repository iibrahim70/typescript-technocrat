{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resOne = createArrayWithGeneric<string>("Banglades");

  interface User {
    id: number;
    name: string;
  }

  const resTwo = createArrayWithGeneric<User>({
    id: 123,
    name: "Ibrahim",
  });

  // tuple
  const createArrayWithTuple = <T, X>(param: T, paramTwo: X): [T, X] => {
    return [param, paramTwo];
  };

  const result = createArrayWithTuple<string, number>("Helo", 123);
  const resultTwo = createArrayWithTuple<string, { country: string }>(
    "Ibrahim",
    { country: "Asia" }
  );

  const addCourse = <T>(student: T) => {
    const course = "Next Level Dev";

    return {
      ...student,
      course,
    };
  };

  const student = addCourse({
    name: "X",
    email: "x@gmail.com",
    devType: "NLD",
  });

  const studentTwo = addCourse({
    name: "Y",
    email: "y@gmail.com",
    experienced: true,
  });
}
