{
  /**
   * Type Assertions đŠ
   * ë´ę° ě ë§ě ë§ě ë§ 100% ěĽë´í  ë ěŹěŠíě§ë§, ě ë§íëŠ´ ěŹěŠíě§ ěë ę˛ ě˘ě!
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // đą

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // íě í  ë ëëí(!) ěŹěŠíě§ë§, ě´ę˛ë ëĽě´ë¤
  const numbers = findNumbers();
  numbers!.push(2); // đą

  const button1 = document.querySelector("class");
  if (button1) {
    button1.nodeValue;
  }
  const button2 = document.querySelector("class")!; // đą
  button2.nodeValue;
}
