/**
 * 모듈 === 파일
 * 모듈화를 이용하면 파일 간에 이름 충돌을 방지할 수 있고
 * 서로 간에 코드를 분리함으로써 모듈성을 높여주고 모듈 간에 재사용도 높여준다.
 */

//한 파일에 default는 꼭 1개만 가능
export function add(a, b) {
  return a + b;
}

export const number = 10;
export function print() {
  console.log("print");
}
