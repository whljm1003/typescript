{
  /**
   * Javascirpt
   * Primitive: number, string, boolean, bigint, symbol, null, indefined
   * Object:function, array....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; //π©
  let age: number | undefined; // μ£Όλ‘ μ¬μ©
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; //π©
  let person2: string | null;

  // unknown π© λ­κ° λ€μ΄μ¬μ§ μλͺ¨λ₯΄κ² μ΄
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any π© λ¬΄μμ΄λ  λ€ λΌ
  let anything: any = 0;
  anything = "hello";

  // void(μλ΅κ°λ₯) = μλ¬΄κ²λ λ¦¬ν΄νμ§ μμ λ μ¬μ©
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // π©

  // naver
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // π©

  // object π©
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
