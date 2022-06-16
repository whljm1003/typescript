{
  /**
   * Type Inference
   * 자동적으로 타입 추론이 가능하지만, 타입을 명시하는 게 좋음!
   */
  let text = "hello";
  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number): number {
    return x + y;
  }

  const result = add(1, 2);
}
