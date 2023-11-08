// reference type => object
{
  const user: {
    firstName: string;
    lastName: string;
    company: "P Hero"; //literal type
    age: number;
    isMarried?: boolean; //optional type
  } = {
    firstName: "Ibrahim",
    lastName: "Khalil",
    company: "P Hero",
    age: 22,
    isMarried: false,
  };
}
