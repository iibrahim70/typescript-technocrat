{
  // polymorphisom

  class Person {
    getSleep() {
      console.log("Im sleeping for 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("Im sleeping for 7 hours per day");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("Im sleeping for 6 hours per day");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person = new Person();
  const personTwo = new Student();
  const personThree = new Developer();

  getSleepingHours(person);
  getSleepingHours(personTwo);
  getSleepingHours(personThree);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // pi * r * r
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // height * widht
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape = new Shape();
  const shapeTwo = new Circle(5);
  const shapeThree = new Rectangle(5, 15);

  getShapeArea(shape);
  getShapeArea(shapeTwo);
  getShapeArea(shapeThree);
}
