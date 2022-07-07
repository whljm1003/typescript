{
  /**
   * 프로토타입 기반 언어
   * es6 - class 가능 => 프로토 기반
   * 프로토 타입 -> 상속을 위해서 쓰이는 언어 (행동들을 재사용, 기존의 오브젝트를 재사용)
   * 프로토 타입 의미 -> 무언가 만들다? 프로토타입을 만들다? (추상화)
   *
   *
   */

  const x = {};
  const y = {};
  console.log(x);
  console.log(y);
  console.log(x.toString());
  console.log(x.__proto__ === y.__proto__);

  // array -> Array -> Object
  const array = [];
  console.log(array);

  console.clear();

  function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
    //   console.log("making...☕️");
    // };
  }
  // Prototype member level
  CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log("making...☕️");
  };
  // machine -> CoffeeMachine -> Object
  const machine1 = new CoffeeMachine(10);
  const machine2 = new CoffeeMachine(20);
  console.log(machine1);
  console.log(machine2);

  function LatteMachine(milk) {
    this.milk = milk;
  }
  LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

  const latteMachine = new LatteMachine(123);
  console.log(latteMachine);
  latteMachine.makeCoffee();
}
