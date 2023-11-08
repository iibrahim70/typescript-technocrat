{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 18;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";

  console.log(isAdult);

  // nullish coalescing operator

  // when need to make decision depends on null or undefiend than use nullish operator

  const isAuthenticated = null;

  const result = isAuthenticated ?? "Guest";

  console.log(result);

  type User = {
    name: string;
    adress: {
      city: string;
      road: string;
      present: string;
      permanent?: string;
    };
  };

  const user: User = {
    name: "Ibrahim",
    adress: {
      city: "Gazipur",
      road: "10/d",
      present: "Gazipur",
    },
  };

  const adress = user?.adress?.permanent ?? "No Permanent Adress";

  console.log({ adress });
}
