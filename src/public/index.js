// 함수 호출과 VS 참조
// 호출하는것 과 참조하여 할당하는 것의 차이를 알고 있어야 함.
// 이런 특징때문에 js 는 매우 유연한 언어가 되었음
// 함수도 객체다. 즉 함수도 매개변수로 전달되거나 함수의 반환값으로 사용된다.
const arr = [];
const obj = {};
function hello() {
  console.log('hello');
}
hello(); // 함수 호출
obj.hello = hello; // 객체에 함수 참조 할당
obj.hello(); // 객체에 바인딩된 함수 호출
arr[0] = hello; // 함수 참조를 배열에 할당
arr[0](); // 함수 호출

// 자바스크립트에서는 함수의  시그니처에 매개변수는 영향을 주지 않는다.
// 함수 f가 있다면 호출 할때 매개변수를 1개 호출하듯 10개를 호출하듯 같은 함수를 호출 하는것 이다.
function f(x) {
  return `x: ${x}`;
}

console.log(f()); // undefined
console.log(f(1)); // x: 1
console.log(f(1, 2)); // x: 1
console.log(f(1, 2, 3)); // x: 1

//  매개변수 해체 - 객체
function b({ name, age, gender }) {
  console.log(name, age, gender);
}
b({ name: 'james', age: 24, gender: false });

// 매개변수 해체: 배열
function bb([name, age, gender]) {
  console.log(name, age, gender);
}

bb(['park', 20, true]);

// 기본적으로 함수의 매개변수를 전달하지 않으면 그 매개변수는 undefined 으로 할당된다.
// ES6부터 함수의 매개변수에 기본값을 지정 할 수 있다.
function print(a, b = 'default', c = 3) {
  console.log(`a: ${a} b: ${b} c: ${c}`);
}
print(5, 6, 7); // 5 , 6 , 7
print(5, 6); // 5 ,6 , 3
print(5); // 5, default, 3
print(); // undefined, default, 3

//  객체에 함수 할당 ,(객체 메서드)
const oo = {
  name: 'kim',
  hello: function() {
    console.log('hello ' + this.name);
  },
};
// ES6 단축 문법
const ooo = {
  name: 'jojo',
  hello() {
    console.log('hello ' + this.name);
  },
};

oo.hello();
ooo.hello();

// javascript this 정확히 이해하기
const o = {
  name: 'jihoon',
  speak: function() {
    console.log('my name is ' + this.name);
  },
};
o.speak();
// this 는 함수를 "어떻게 선언했느냐"가 아니라. "어떻게 호출 했느냐"로 결정된다.
// 즉 this가 o객체에 묶인 이유는 speak() 가 o의 프로퍼티가 아니라 o 에서 speak를 호출했기 때문

const speak = o.speak;
console.log('speak === o.speak:', speak === o.speak); // true 두 변수는 값은 함수를 가리킨다.
speak(); // my name is undefined
// 함수를 이렇게 호출하면 자바스크립트는 이 함수가 어디에 속하는지 알수 없으므로 this는 undefined 에 묶인다.

// 함수 선언, 함수 표현식, 익명 함수
// 지금까지 함수는 선언하여 사용하였다. function say() { ... }
// 익명함수란 함수식별자, 바디중에 함수식별자가 없는 함수
// 함수 표현식으로 익명함수를 만든후 식별자 f1에 할당
const f1 = function() {
  console.log('f1()');
};
f1();

// 함수 표현식2 - "이름붙은 함수 표현식"
// 재귀적으로 자기 자신을 호출할 경우 이런식으로 쓰기도 함
const g = function f1(running) {
  if (running) {
    f1();
  }
};
g(false);

/*
  ==> 함수 선언 VS 함수 표현식
  차이점: 컨텍스트에서 차이가 난다.
  그러면 어떨 때 함수를 선언하고 어떨 때 함수 표현식으로 함수를 만드나?
  나중에 함수를 호출할 생각으로 함수를 만든다면 => "함수 선언"을 사용 권장
  함수를 다른곳에 할당하거나 다른 함수에게 넘길 목적으로 함수를 만든다면 "함수 표현식" 권장
 */

// 화살표 함수: 함수 표현식의 단축표현으로 익명함수로 만들어 다른 함수로 넘길때 사용할떄 유용하다.
const func1 = () => {};
const func2 = arr => {
  arr.map(v => console.log(v));
};
const func3 = (a, b) => a + b;

// 함수에 this를 연결할 객체를 사용할 때 사용
// call, apply, bind
// 사용자 정의로 this 를 정의 할 때 사용한다.
const jojo = { name: 'jojo' };
const jihoon = { name: 'jihoon' };

// 이 함수는 어떠한 객체에도 연결되지 않았지만 내부에서 this를 사용
function greeting() {
  console.log(`hello ${this.name}`);
}

greeting();
greeting.call(jojo);
greeting.call(jihoon);

//  call, apply 차이점
// 매개변수 처리하는 방식 차이, 보통 매개변수, 배열 방식
function update(birthYear, gender) {
  this.birthYear = birthYear;
  this.gender = gender;
}

update.call(jojo, '1985', 'man');
console.log('jojo: ', jojo);
// { name: 'jojo', birthYear: '1985', gender: 'man' }
update.apply(jihoon, ['1811', 'woman']);
console.log('jihoon: ', jihoon);
// { name: 'jihoon', birthYear: '1811', gender: 'woman' }

const w = { name: 'w' };
const updateW = update.bind(w);
updateW('2000', 'Man');
console.log('w: ', w); // { name: 'w', birthYear: '2000', gender: 'Man' }
updateW('1122', 'girls');
console.log('after w: ', w); //{ name: 'w', birthYear: '1122', gender: 'girls' }

// 책 설명이 잘 공감이 않감. 이렇게 쓸 일이 있으려나?
updateW.call(jojo, '1122', 'Woman');
console.log('after jojo: ', jojo); // { name: 'jojo', birthYear: '1985', gender: 'man' }
// 조조의 값은 변경되지 않았음.
