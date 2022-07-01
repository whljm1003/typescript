# [**타입스크립트 학습**](https://www.typescriptlang.org/download)

## **타입스크립트 배워야 하는 이유**

1. TYPE

- 조금 더 안정적이다
- Compile 환경에서 타입이 결정되는 Statically typed 이라 Runtime전에 확인 할 수 있다

2. OOP

- 모듈성, 재사용, 확장성, 유지 보수
- 높은 퀄리티, 생산성, 좀 더 빠르게 완성가능

<br/>

## **타입스크립트 설치 방법**

> npm install -g typescript

> 설치(버전) 확인: tsc -v

<br/>

## **타입스크립트 컴파일러 툴**

> npm install -g ts-node

> ts-node main.ts

<br/>

## **타입스크립트 명령어**

> tsc -h // 명령어 확인

> tsc main.ts // 똑같은 js파일을 만듬

> tsc main.ts -w // 컴파일 할 파일을 계속 바라봄

<br/>

<br/>

## 절차 지향적 프로그래밍(Imperative and Procedural Programming)

- 정의된 순서대로 절차적으로 함수가 하나씩 호출하는 방식
- 함수가 여러개로 얽혀있고 데이터도 다른 곳에 있어서 하나의 기능을 수정 하기 위해선 전체 어플케이션을 이해해하고 수정해야 한다. 뿐만 아니라 사이드 이펙트 발생 확률 높아 유지보수와 확장이 힘듬.

<br/>

## 객체 지향적 프로그래밍 (OOP)

- 프로그래밍 패러다임(프로그래밍 하는 방식 중 한가지)
- objects의 컨셉으로 프로그래밍 하는 방식.
- 관련된 data나 code를 함께 묶을 수 있음.
- 생산성, 높은 퀄리티, 빠른 구현, 유지보수
- 관련있는 데이터와 함수를 객체들끼리 묶어 두었기 때문에 유지보수와 확장이 쉬움.

<br>

# 객체 지향 4가지 원칙

### **캡슐화(Encapsulation)**

> 서로 관련 있는 함수와 데이터를 한 객체에 묶어두는 것 (알약) <br/>
> ex)고양이 내부 상태 (state-배고픔, 피곤함,화남,행복) 를 변경할 순 없지만, 외부 행동(metohds-놀아줌,먹을것 )으로 내부 상태를 변경이 가능함

<br/>

### **추상화(Abstraction)**

> 추상화를 통해서 내부에서 어떻게 만들어졌는지 얼마나 복잡한지 신경쓰지 않고, 외부에서 보이는 인터페이스를 이용해 함수를 사용할 수 있는것 <br/>
> ex) 커피를 마실 이용자가 커피 머신기의 내부의 기능은 모르지만 버튼으로 뽑아 먹을 수 있는 것

<br/>

### **상속(Inheritance)**

> 한번 잘 정의해둔 클래스를 재사용 가능함
> (parent,super,base // child,sub,derived) | IS-A관계 <br/>
> ex)브라우저 DOM 요소 (EventTarget-Node-Document,Element,Text-HTMLElement) <br/>
> 동물 - 고양이,강아지,돼지

<br/>

### **재사용성(Polymorphism)**

> 다양한 형태, 공통된 함수로 접근이 가능함
