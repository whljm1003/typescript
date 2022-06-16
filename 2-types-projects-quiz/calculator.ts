{
  /**
   * Let's make a calculator 🧮
   */
  console.log(calculate2("add", 1, 3)); // 4
  console.log(calculate2("substract", 3, 1)); // 2
  console.log(calculate2("multiply", 4, 2)); // 8
  console.log(calculate2("divide", 4, 2)); // 2
  console.log(calculate2("remainder", 5, 2)); // 1

  // My solution 😭
  type Command1 = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculate1(command: Command1, ...num: number[]): number {
    if (command === "add") {
      return num.reduce((a, b) => a + b);
    } else if (command === "substract") {
      return num.reduce((a, b) => a - b);
    } else if (command === "multiply") {
      return num.reduce((a, b) => a * b);
    } else if (command === "divide") {
      return num.reduce((a, b) => a / b);
    } else if (command === "remainder") {
      return num.reduce((a, b) => a % b);
    } else {
      throw Error("unkown command");
    }
  }

  // Ellie solution ✨
  type Command2 = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculate2(command: Command2, a: number, b: number): number {
    switch (command) {
      case "add":
        return a + b;
      case "substract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      case "remainder":
        return a % b;
      default:
        throw Error("unkown command");
    }
  }
}
