{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_CRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;
  function makeCoffe(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_CRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_CRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_CRAMM_PER_SHOT;
  const coffee = makeCoffe(2);
  console.log(coffee);
}
