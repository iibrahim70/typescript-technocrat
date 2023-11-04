{
  // spread operator

  const brosOne: string[] = ["Mir", "Firoz", "Mizan"];
  const brosTwo: string[] = ["Tanmoy", "Nahid", "Rahat"];

  brosOne.push(...brosTwo);
  const mentorsOne: {
    typescript: string;
    redux: string;
    dbms: string;
  } = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentorsTwo: {
    prisma: string;
    next: string;
    cloud: string;
  } = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorsList = {
    ...mentorsOne,
    ...mentorsTwo,
  };

  // rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Helo ${friend}`));
  };

  greetFriends("Abul", "Babul");
}
