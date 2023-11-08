{
  // conditional type
  type A1 = number;
  type B1 = undefined;

  type X = A1 extends null ? true : false; // conditional type

  type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type CheckVehicle<T> = T extends keyof Vehicle ? true : false;
}
