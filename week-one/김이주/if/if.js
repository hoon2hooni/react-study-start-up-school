'use strict';
// 1번
// if와 문자열 0
if ("0") {
  alert( 'Hello' );
}
// 위의 코드는 실행된다.

// 2번
// 자바스크립트의 공식 이름
let answer = prompt("자바스크립트의 '공식' 이름은 무엇일까요?");
if (answer == 'ECMAScript') {
  alert('정답입니다!')
} else {
  alert("You don't know? 'ECMAScript'!")
}

// 3번
// 입력받은 숫자의 부호 표시하기
let value = prompt('숫자를 입력하세요.');
let result = ( value > 0 ) ? 1 :
  ( value < 0 ) ? -1 :
  ( value == 0 ) ? 0 : '숫자를 입력해주세요';

alert (result)

// 4번
// if..else를 ?로 고치기
let messege = (login == '직원') ? "안녕하세요." :
(login == '임원') ? '환영합니다.' :
(login == "") ? '로그인이 필요합니다.' : '';