{
  /**
   * 제너릭은 어떤 타입이든지 받을 수 있고, 코딩을 할 때 타입이 결정되기 때문에 타입을 더 보장받을 수 있다
   */

  function checkNotNull(arg: number | null): number {
    if (arg === null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg === null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullGeneric<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNullGeneric(123);
  const boal: boolean = checkNotNullGeneric(true);
}
