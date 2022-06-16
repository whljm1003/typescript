{
  /**
   * Type Assertions 💩
   * 내가 정말정말정말 100% 장담할 때 사용하지만, 왠만하면 사용하지 않는 게 좋음!
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // 확신할 때 느낌표(!) 사용하지만, 이것도 똥이다
  const numbers = findNumbers();
  numbers!.push(2); // 😱

  const button1 = document.querySelector("class");
  if (button1) {
    button1.nodeValue;
  }
  const button2 = document.querySelector("class")!; // 😱
  button2.nodeValue;
}
