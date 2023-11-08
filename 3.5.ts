{
  // access modifiers

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

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public get_Balance() {
      return this._balance;
    }
  }

  const goribAccount = new BankAccount(123, "Mr. Gorib", 20);
  goribAccount.get_Balance();

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }
}
