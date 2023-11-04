{
  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is  nothing to search");
    }
  };

  searchName(null);

  // unknown type
  const speedPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed.toFixed(2)}`);
    } else if (typeof value === "string") {
      const [num, ...string] = value.split(" ");

      const convertedSpeed = (parseFloat(num) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed.toFixed(2)}`);
    } else {
      console.log("Wrong Input");
    }
  };

  speedPerSecond("4598 fsdfsdf dfsd");

  // never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("Muskil Se Error Ho Gaya");
}
