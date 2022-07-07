{
  // JS에서 this는 요술 램프 지니처럼 누가 호출 했냐에 따라 주인이 바뀌게 된다.!

  console.log(this); // this -> window

  function simpleFuntion() {
    console.log(this);
  }
  simpleFuntion(); // this -> window
  console.clear();

  class Counter {
    count = 0;
    increase = function () {
      // arrow function 을 이용하면 선언된 당시의 this를 유지해서 굳이 bind 해주지 않아도 됨
      console.log(this);
    };
  }

  const counter = new Counter();
  counter.increase(); // this -> Counter
  const caller = counter.increase;
  // const caller = counter.increase.bind(counter); // bind로 연결해주면 this를 바꿈
  caller(); // this -> undefined

  class Bob {}

  const bob = new Bob();
  bob.run = counter.increase;
  bob.run(); // this -> Bob
}
