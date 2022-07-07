// tsc logging.ts -w -> 한 파일 컴파일.
// tsc --init -> tsconfig.json 생김.
// tsc -w -> tsconfig의 모든 typescript 파일을 javascript 파일로 컴파일 해줌.

/**
 * tsconfig에서 다양한 옵션
 * "exclude": ["./src/dev.ts"] -> dev.ts만 제외하고 컴파일 함.
 * "include": ["./src/dev.ts"] -> dev.ts만 컴파일 함.
 * tsconfig/outDir -> 컴파일 파일 설정.
 * tsconfig/rootDir -> 루트 폴더 설정.
 * 	(타입스크립트가 있는 최상위 폴더 부터 build에 들어감.
 *	그래서 src밖에 ts파일을 못쓰게 rootDir로 설정을 해줘야 실수를 방지할 수 있음.)
 * incremental -> 이전 컴파일 한 부분이랑 비교해서 수정된 사항만 컴파일해줌
 * composite -> 빌드된 정보를 기억하고 있어서 다음 빌드 때 빠르게 도와줌
 * tsBuildInfoFile -> incremental true이면 관련 된 정보를 담을 수 파일을 지정
 * target -> 어떤 버전을 컴파일 할 것인지 확인 가능.
 * lib -> 배열에 요소를 넣어서 세부적인 라이브러리 선택 가능
 * jsx -> 리액트 관련 설정
 * module -> 모듈 정보를 어떻게 할건지 결정 (nodejs - commonjs)
 * allowJs -> 프로젝트 안에서 js를 같이 사용할 것인지
 * checkJs -> js파일에서 잘못된 부분을 에러로 설정
 * declaration -> 타입 정의에 관련 된 것 (작성한 코드를 라이브러리 형식이 아니라면 잘 사용 안함)
 * sourceMap -> 디버깅 할때 유용하게 사용
 * outFile -> 다수의 ts파일을 js파일로 바꿔 줌
 * removeComments -> Comment를 다 없애줌
 * noEmit -> 컴파일 에러 체크만 하고 js 변환은 하지 않음
 * importHelpers -> 이터러블 문제 발생 시 해결 (요즘은 잘 사용안함)
 * isolatedModules -> 각각의 파일을 다른 모듈로 만들어줌
 *  */

console.log("hahahaha!!!");
