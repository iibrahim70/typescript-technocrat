{
  // object destructuring

  const user: {
    id: number;
    name: {
      firstName: string;
      lastName: string;
    };
    contactNo: number;
    adress: string;
  } = {
    id: 1,
    name: {
      firstName: "Ibrahim",
      lastName: "Khalil",
    },
    contactNo: 123456789,
    adress: "Gazipur",
  };

  const {
    contactNo,
    name: { firstName },
  } = user;

  // array destructuring

  const myFriends = ["Rohim", "Korim", "Salam", "Jobbar", "Borkot"];

  const [, , three, ...four] = myFriends;
}
