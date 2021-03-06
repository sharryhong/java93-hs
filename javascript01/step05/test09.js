/* 주제: 객체 - this변수를 통해 객체를 초기화시키기
- this는 빈 객체 주소를 저장하고 있다.
*/

"use strict"

function init() {
  // 계산기로서 역할을 할 수 있도록 객체를 초기화시켜보자.
  // 변수 1개, 함수 4개
  this.result = 0 // 빈 객체에 result 이름으로 0 값을 저장한다.
                  // 만약 이미 result라는 이름으로 저장된 값이 있다면,
                  // 그 값을 덮어쓴다.

  this.plus = function(value) {this.result += value}
  this.minus = function(value) {this.result -= value}
  this.multiple = function(value) {this.result *= value}
  this.divide = function(value) {this.result /= value}
}

var calc = new init() // new 다음에 곧바로 함수 호출하기.
                      // 호출이 끝나면 그 자리에 초기화시킨 객체 주소가 놓인다.
console.log(calc)

// 10 + 20 * 3 - 7 / 2 = ?
// 주의! 이 계산기는 연산자 우선순위를 처리하지 않는다.
// 그냥 계산 ㅋㅋ
calc.plus(10)
calc.plus(20)
calc.multiple(3)
calc.minus(7)
calc.divide(2)
console.log(calc.result)

// 만약 생성자함수말고 {} 생성 방식으로 해보면?
var calc2 = {
  result: 0,
  plus: function(value) {this.result += value},
  minus: function(value) {this.result -= value},
  multiple: function(value) {this.result *= value},
  divide: function(value) {this.result /= value}
}

console.log(calc2)
calc2.plus(10)
calc2.plus(20)
calc2.multiple(3)
calc2.minus(7)
calc2.divide(2)
console.log(calc2.result)

// 차이점은? => 계산기를 여러 개 생성해봐!
// new 방식으로 3개 만들기 => 아래처럼.. 간단하다!
// 즉, 객체를 한번만 만든다면 굳이 생성자를 만들필요없이 {} 블록으로 객체를 생성하는 것이 편하다.
// 같은 객체를 여러개 만드는 상황이라면 생성자를 사용하여 초기화시키는 것이 훨씬 더 편하고, 코드가 간결해진다.
// : 함수를 응용한 사례. 객체를 생성한다는 의도도 눈에 확 들어온다.
var c1 = new init();
c1.plus(20)
var c2 = new init();
c2.plus(30)
var c3 = new init();
c3.plus(40)
console.log(c1.result, c2.result, c3.result)

// 블록 방식으로 3개 만들기
var c4 = {
  result: 0,
  plus: function(value) {this.result += value},
  minus: function(value) {this.result -= value},
  multiple: function(value) {this.result *= value},
  divide: function(value) {this.result /= value}
}
var c5 = {
  result: 0,
  plus: function(value) {this.result += value},
  minus: function(value) {this.result -= value},
  multiple: function(value) {this.result *= value},
  divide: function(value) {this.result /= value}
}
var c6 = {
  result: 0,
  plus: function(value) {this.result += value},
  minus: function(value) {this.result -= value},
  multiple: function(value) {this.result *= value},
  divide: function(value) {this.result /= value}
}
c4.plus(200)
c5.plus(300)
c6.plus(400)
console.log(c4.result, c5.result, c6.result)
