"use strict";
// 1번
//빈 객체 user를 만듭니다.
let obj = {};
// user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
obj.name = "John";
console.log(obj.name);
// user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
obj.surname = "Smith";
console.log(obj.surname);
// name의 값을 Pete로 수정해보세요.
obj.name = "Pete";
console.log(obj.name);
// user에서 프로퍼티 name을 삭제하세요.
delete obj.name;
console.log(obj.name);

console.clear();

// 2번
// 객체가 비어있는지 확인
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

// 3번
// 변하지 않는 객체?
const user = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";
// const로 선언된 객체는 수정이 가능하여 에러없이 실행된다.

// 4번
// 프로퍼티 합계
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0
for (let key in salaries){
  sum += salaries[key]
}
salaries.sum = sum;
console.log(salaries)

// 5번
// 프로퍼티 값 두배로 부풀리기
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
  // 프로퍼티의 값이 숫자이면
  for (let key in obj){
    if (typeof obj[key] == 'number'){
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

// 함수 호출 후
console.log(menu);