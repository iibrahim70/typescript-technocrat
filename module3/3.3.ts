{
  // type guards

  // typeof => type guard

  const add = (
    param: string | number,
    paramTwo: string | number
  ): string | number => {
    if (typeof param === "number" && typeof paramTwo === "number") {
      return param + paramTwo;
    } else {
      return param.toString() + paramTwo.toString();
    }
  };

  console.log(add("4", "4"));

  // in guard
  interface NormalUser {
    name: string;
  }

  interface AdminUser {
    name: string;
    role: "admin";
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and role ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  console.log(getUser({ name: "Ibrahim", role: "admin" }));
}
