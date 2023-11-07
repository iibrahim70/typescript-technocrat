{
  // mapped types

  const numArray: number[] = [1, 2, 3];

  const strArray: string[] = numArray.map((num) => num.toString());

  interface AreaNum {
    height: number;
    width: number;
  }

  type Height = AreaNum["height"]; // lookup type

  type AreaStr<T> = {
    [index in keyof T]: T[index];
  };

  const area: AreaStr<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
