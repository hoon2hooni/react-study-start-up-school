"use strict";

//1번
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('보호자의 동의를 받으셨나요?');
  }
}
//else문을 제거해도 동일하게 동작한다.

//2번
//if문 사용하지 않고 동일한 동작하는 함수 한줄 작성
//2-1. 물음표 연산자를 사용하기
//2-2. OR연산자 || 사용하기
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('보호자의 동의를 받으셨나요?');
  }
}

//2-1.물음표 연산자
function checkAge(age) {
  return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}

//2-2. OR연산자
function checkAge(age) {
  return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

//3번
//a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들기
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//4번
//x의 n제곱을 반환해주는 함수, pow(x,n)를 만들기
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x값 입력하기", '');
let n = prompt("n값 입력하기", '');

if (n < 1) {
  alert(`${n}은 양의 정수이어야 합니다.`);
} else {
  alert(pow(x, n));
}