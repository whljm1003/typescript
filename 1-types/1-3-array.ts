{
  // Array
  const fruits: string[] = ["π", "π"];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple => μ¬μ© κΆμ₯νμ§ μμ (λ°μ΄ν° νμΈνκΈ° μ΄λ €μ) -> interface, type alias, class
  // interface, type alias, class λΆκ°λ₯ ν  κ²½μ° tuple μ¬μ©
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
