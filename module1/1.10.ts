{
  // union types
  type FrontendDev = "Fakibaj Developer" | "Junior Developer";
  type FullstackDev = "Frontend Developer" | "Expert Developer";

  type Developer = FrontendDev | FullstackDev;

  const newDev: Developer = "Junior Developer";

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
  };

  const user: User = {
    name: "Himel",
    gender: "Male",
  };

  type Frontend = {
    skills: string[];
    designationOne: "Frontend Developer";
  };

  type Backend = {
    skills: string[];
    designationTwo: "Backend Developer";
  };

  type FullstackDeveloper = Frontend & Backend;

  const fullStackDev: FullstackDeveloper = {
    skills: ["Html"],
    designationOne: "Frontend Developer",
    designationTwo: "Backend Developer",
  };
}
