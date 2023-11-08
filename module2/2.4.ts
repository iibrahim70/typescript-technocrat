{
  // interface and generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Ibrahim",
    computer: {
      brand: "LG",
      model: "K66",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Emilab",
      model: "Lw5",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Khalil",
    computer: {
      brand: "HP",
      model: "K5",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "Lw5",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "150cc",
    },
  };
}
