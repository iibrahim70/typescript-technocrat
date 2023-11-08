// fucntion
{
  // normal function
  function add(numOne: number, numTwo: number): number {
    return numOne + numTwo;
  }

  // arrow function
  const addArrow = (numOne: number, numTwo: number): number => numOne + numTwo;

  // callback function
  const arr: number[] = [2, 4, 8];
  const newArray: number[] = arr.map((elem: number): number => elem + elem);
}

// method
{
  const poorUser = {
    name: "Ibrahim",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };
}
