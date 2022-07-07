// default가 아니라면 {}로 감싸줘야 함.
// as로 이름 변경가능
// import run, { print as printMessage } from "./10-3-module1.js";

import * as calculator from "./10-3-module1.js";
console.log(calculator.add(1, 2));
calculator.print();
console.log(calculator.number);
