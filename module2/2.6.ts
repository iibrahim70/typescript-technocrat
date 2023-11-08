{
  // constraints

  const addCourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "Next Level Dev";

    return {
      ...student,
      course,
    };
  };

  const student = addCourse({
    id: 1,
    name: "X",
    email: "x@gmail.com",
    devType: "NLD",
  });

  const studentTwo = addCourse({
    id: 2,
    name: "Y",
    email: "y@gmail.com",
    experienced: true,
  });
}
