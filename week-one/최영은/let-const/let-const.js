"use strict";

//1번 입니다.
let admin;
let name;

name = "john";
admin = name;
alert(admin);

//2번 입니다.
let ourPlanetName = "Earth";
let currentUserName;

//3번 입니다.
const BIRTHDAY = '18.04.1982'; // 대문자 상수로 바꿔도 괜찮을까요? => Yes, 이 경우 하드 코딩한 값이 맞기 때문에 대문자 상수가 적합하다.
const AGE = someCode(BIRTHDAY); // 대문자 상수로 바꿔도 괜찮을까요? => No, 코드가 실행될 때마다 바뀌는 값은 상수에 적합하지 않다.