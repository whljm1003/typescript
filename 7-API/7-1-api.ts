Array; // command + 왼쪽 마우스 클릭하면 Array api 확인 가능
[1, 2].map;

// every = 모든 요소가 true이면 true 그렇지 않으면 false
// false = 모든 요소 중 하나라도 true이면 true 그렇지 않으면 false
type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];
const result = students.every((student) => {
  return student.passed;
});

console.log(result);

// every 인자값 이용하는 방법
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
