"use strict";

//1번
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2번
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//3번
const user = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";

//실행된다. const는 한 번이라도 값을 할당한 변수가 변경되는 걸 막는데 변수 user는 객체 참조값을 저장하고 있기 때문에,
// const는 값이 변경되는 것을 막을 뿐 객체 내용을 변경하는 것은 막지 않는다.

//4번
//팀원의 월급을 합한 값, sum에 저장하는 코드 작성
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

//5번
//객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 만들기

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu)