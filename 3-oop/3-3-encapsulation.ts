{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public => default
  // private => 외부 접근 X
  // protected => 상속, 외부에서는 접근할 수 없지만 자식 클래스에선 접근이 가능함
  class CoffeeMaker {
    private static BEANS_CRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level
    // 생성자
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    // class level로 사용하여 object를 생성하지 않아도 됨.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    // 메소드
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffe(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_CRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_CRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);
}
