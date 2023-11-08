{
  // type assertion

  let anything: any;

  anything = "Next Level";
  anything = 5;

  anything as number;

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value) * 1000;
      return convertValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const res = kgToGram(1) as number;
  console.log(res);

  const resTwo = kgToGram("5") as string;
  console.log(resTwo);

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
