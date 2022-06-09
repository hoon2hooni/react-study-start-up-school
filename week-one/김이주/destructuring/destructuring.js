"use strict";
// 1번
// 구조 분해 할당
let user = {
  name: "John",
  years: 30,
};

// name 프로퍼티의 값을 변수 name에 할당하세요.
// years 프로퍼티의 값을 변수 age에 할당하세요.
// isAdmin 프로퍼티의 값을 변수 isAdmin에 할당하세요. isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.
let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

// 2번
// 최대 급여 계산기
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 400,
};
function topSalary(obj) {
  let max = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(obj)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}
console.log(topSalary(salaries));
