{
  // Array
  const fruits: string[] = ["🍎", "🍌"];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple => 사용 권장하지 않음 (데이터 확인하기 어려움) -> interface, type alias, class
  // interface, type alias, class 불가능 할 경우 tuple 사용
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
