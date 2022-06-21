{
  /** 추상화
   * 인터페이스를 굉장히 간단하고 심플하게 만듬으로써 사용하는 사람이
   * 간편하게 많은 생각을 하지 않고 사용할 수 있도록 도와준다.
   * 이용자: 내가 만든 클래스를 이용하는 사람(이용자, 팀원)
   *
   * 추상화를 하기 위한 여러가지 방법이 있음
   * 1. 캡슐화로 추상화 가능 (private)
   * 2. interface로 추상화 가능
   * */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_CRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level
    // 생성자
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    // class level로 사용하여 object를 생성하지 않아도 됨.
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    // 메소드
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_CRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_CRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...🔥");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  // class를 신경쓰지 않고 interface로 규약된 함수를 사용할 수 있음.
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
