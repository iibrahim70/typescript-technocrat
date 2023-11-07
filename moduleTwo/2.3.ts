{
  // generic type

  type GenericArray<T> = Array<T>;

  const rollNum: number[] = [1, 2, 3, 4, 5];
  const rollNumTwo: Array<number> = [1, 2, 3, 4];
  const rollNumThree: GenericArray<number> = [2, 3, 4, 5];

  const name: GenericArray<string> = ["Ibrahim", "Khalil"];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Ibrahim",
      age: 22,
    },
    {
      name: "Khalil",
      age: 22,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const couple: GenericTuple<string, number> = ["Ibrahim", 22];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "Ibrahiim", email: "aviknuhash70@gmail.com" },
  ];
}
