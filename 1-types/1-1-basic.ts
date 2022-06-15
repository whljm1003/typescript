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
  let name: undefined; //💩
  let age: number | undefined; // 주로 사용
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; //💩
  let person2: string | null;

  // unknown 💩 뭐가 들어올지 잘모르겠어
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩 무엇이든 다 돼
  let anything: any = 0;
  anything = "hello";

  // void(생략가능) = 아무것도 리턴하지 않을 때 사용
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // naver
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
