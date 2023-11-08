{
  // oop - inheritence

  class Person {
    name: string;
    age: number;
    adress: string;

    constructor(name: string, age: number, adress: string) {
      this.name = name;
      this.age = age;
      this.adress = adress;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, adress: string) {
      super(name, age, adress);
    }
  }
  const student = new Student("Ibrahim", 22, "Bangladesh");
  student.getSleep(5);

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      adress: string,
      designation: string
    ) {
      super(name, age, adress);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take class  ${numOfClass}`);
    }
  }
  const teacher = new Teacher("Himel", 40, "Banglades", "Math teacher");
  teacher.getSleep(8);
  teacher.takeClass(5);
}
