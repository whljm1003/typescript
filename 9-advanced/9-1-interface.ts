/**
 * Interface = 어떤 것의 규격사항임. 그래서 다른 사람들과(object와 obejct) 의사소통할 때 정해진 인터페이스를 토대로 서로간의 상호작용을 도와줌 (api, 계약서)
 * 특정한 규격을 정의하는 것이라면 인터페이스 추천 / (클래스)
 * Type alias = 데이터를 담을 때 어떠한 데이터를 담을 수 있을지 데이터의 모습, 데이터의 타입을 결정하는 것
 * 어떠한 것을 구현 할 목적이 아니라, 데이터를 담을 목적이라면 타입을 추천 / (변수)
 */

type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

// object ★
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class ★
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZpositionInterface extends PositionInterface {
  z: number;
}
type ZpositionType = PositionType & { z: number };

// only interfaces can be merged.
interface PositionInterface {
  z: number;
}
// type error 발생
// type PositionType {
//	}

// 😃 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // string

type NumberType = number;
type Direction = "left" | "right";
