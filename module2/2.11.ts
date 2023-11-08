{
  // utility types

  // pick
  interface Person {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  }

  type NameAge = Pick<Person, "name" | "contactNo">;

  // omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // required
  type PersonRequired = Required<Person>;

  // partial
  type PersonPartial = Partial<Person>;

  // read only
  type PersonReadOnly = Readonly<Person>;

  const person: PersonReadOnly = {
    name: "Ibrahim",
    age: 22,
    contactNo: 123,
  };
  // person.age = 23;

  // record

  type Obj = Record<string, string>;

  const obj = {
    a: "a",
    b: "b",
    c: "c",
  };

  const emptyObj: Record<string, unknown> = {};
}
