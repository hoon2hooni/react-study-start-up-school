"use strict";
// 1번
// 'else'는 정말 필요할까요?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

// else가 없어도 동일하게 동작한다.

// 2번
// '?'나 '||'를 사용하여 함수 다시 작성하기
function checkAge(age) {
  return age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
}

function checkAge(age) {
  return age > 18 || confirm("보호자의 동의를 받으셨나요?");
}

// 3번
// min(a,b) 함수 만들기
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

// 4번
// pow(x,n) 함수 만들기
function pow(x, n) {
  let result = 1;
  for (var i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x: ");
let n = prompt("n: ");
if (n < 1) {
  alert(`${n}은 양의 정수여야 한다.`);
} else {
  console.log(pow(x, n));
}


