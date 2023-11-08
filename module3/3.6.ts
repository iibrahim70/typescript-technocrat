{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    // private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // public getBalance() {
    //   return this._balance;
    // }

    // getter
    get balance() {
      return this._balance;
    }
  }

  const goribAccount = new BankAccount(123, "Mr. Gorib", 20);

  const addBalance = (goribAccount.deposit = 100);

  const myBalance = goribAccount.balance;
  console.log(myBalance);
}
