{
  // instance of type guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("Im making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("Im barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("Im meawing");
    }
  }

  // normal way

  // const getAnimal = (animal: Animal) => {
  //   if (animal instanceof Dog) {
  //     animal.makeBark();
  //   } else if (animal instanceof Cat) {
  //     animal.makeMeaw();
  //   } else {
  //     animal.makeSound();
  //   }
  // };

  // advance way

  // make function for cheking type
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const cat = new Cat("cat bhi", "cat");
  const dog = new Dog("dog bhi", "dog");
  getAnimal(dog);
}
