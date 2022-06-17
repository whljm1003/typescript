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

  // Getter와 Setter
  class User {
    // get을 사용하면 fullName에 접근할 때마다 새로운 데이터를 만들고 개선할 수 있다.
    // 주로 어떠한 계산을 해야할 때 사용 가능함.
    // 작성할땐 함수형태지만, 접근할 때는 변수에 접근하는 것 처럼 접근해야 됨
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.internalAge = num;
    }
    // private,public 키워드를 사용하면 따로 멤버 변수 작성없이 자동적으로 만들어짐
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName);
  console.log(user.age);
}
