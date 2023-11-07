{
  // generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = keyof Vehicle;

  const person: Owner = "bike";

  const getPropertyValuee = <X, Y extends keyof X>(object: X, key: Y) => {
    return object[key];
  };

  const user = {
    id: 1,
    name: "Ibrahim",
    email: "ib@gmail.com",
  };
  const res = getPropertyValuee(user, "email");
}
