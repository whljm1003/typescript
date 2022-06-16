{
  /**
   * Let's make a game 🕹
   */
  const position: Position = {
    x: 0,
    y: 0,
  };
  interface Position {
    x: number;
    y: number;
  }

  // My solution
  type Move = "up" | "down" | "left" | "right";
  function move1(Moving: Move): void {
    switch (Moving) {
      case "up":
        position.y++;
        break;
      case "down":
        position.y--;
        break;
      case "left":
        position.x--;
        break;
      case "right":
        position.x++;
        break;
      default:
        throw new Error("unkown move");
    }
  }

  // Ellie
  function move2(direction: "up" | "down" | "left" | "right") {
    switch (direction) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "right":
        position.x += 1;
        break;
      default:
        throw new Error(`unkown direction: ${direction}`);
    }
  }

  console.log(position); // { x: 0, y: 0}
  move2("up");
  console.log(position); // { x: 0, y: 1}
  move2("down");
  console.log(position); // { x: 0, y: 0}
  move2("left");
  console.log(position); // { x: -1, y: 0}
  move2("right");
  console.log(position); // { x: 0, y: 0}
}
