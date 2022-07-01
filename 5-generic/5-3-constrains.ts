{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!!");
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time!!!");
    }
    workPartTime() {}
  }
  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
  function payBad(empolyee: Employee): Employee {
    empolyee.pay();
    return empolyee;
  }
  // 조건을 줘서 Employee를 확장한 타입만 가능!
  // 조건을 주어 조금 더 제한적인 범위 내에서 제너릭을 사용가능!
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();
  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);

  const obj = {
    name: "ellie",
    age: 20,
  };
  const obj2 = {
    animal: "🐕",
  };

  // 제너릭 T object의 key 중에 하나를 선택하는 방법
  // <k extents keyof T>
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "name")); // ellie
  console.log(getValue(obj, "age")); // 20
  console.log(getValue(obj2, "animal")); // 🐕
}
