{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 클래스 내부에서는 let,const,function 키워드를 사용하지 않는다.
    // 클래스 내부 변수 또는 함수에 접근하려면 this를 사용하여 이 클래스의 변수,함수라고 알려줘야 함
    // 생성자를 이용해서 외부 값을 받아올 수 있음.

    // 속성
    // instance (object) level만 사용하면 클래스를 생성할 때마다 속성들을 만들어 내어 메모리를 낭비하게 됨.
    // static 키워드를 사용하면 class level로 사용되고 메모리 낭비를 막을 수 있음.
    // 또한 클래스 내부가 아니고 클래스 자체에 있는 것이기 때문에 this가 아닌 클래스명(CoffeeMaker)을 사용 해줘야 함.
    static BEANS_CRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level
    // 생성자
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    // class level로 사용하여 object를 생성하지 않아도 됨.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    // 메소드
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
  // new CoffeeMaker 새로운 인스턴스이고 괄호()는 생성자를 뜻함
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);
  // class level
  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}
