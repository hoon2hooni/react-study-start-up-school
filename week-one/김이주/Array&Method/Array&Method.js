"use strict";
// 1번
// border-left-width를 borderLeftWidth로 변경

function camelize(str) {
  let arr = str.split("-");
  // 배열 1번째 이후의 요소들의 맨 앞글자만 대문자로 변경한다
  for (var i = 1; i < arr.length; i++) {
    let upper = arr[i].toUpperCase().slice(0, 1);
    let lower = arr[i].slice(1);
    let newStr = upper + lower;
    arr[i] = newStr;
  }
  // 각 요소를 붙여준다.
  let newArr = arr.join("");
  return newArr;
}

// 2번
// 특정 범위에 속하는 요소 찾기
let arr = [5, 3, 8, 1,10,2];
function filterRange(array, arg1, arg2) {
  // filter 메서드로 원하는 조건의 배열 요소를 새로운 배열에 담는다.
  let filteredArr = array.filter((item) => item >= arg1 && item <= arg2);
  return filteredArr;
}
let result = filterRange(arr, 1, 4);
alert(result);
alert(arr);



// 3번
// 특정 범위에 속하는 요소 찾기 (배열 변경하기)
let ary = [5,3,8,1];

function filterRangeInPlace(arr, arg1, arg2) {
  for (var i=0; i < arr.length; i++){
    if (!(arr[i] >= arg1 && arr[i] <= arg2)) {
      arr.splice(i,1);
    }
  }
  return arr;
}

filterRangeInPlace(ary,1,4);

// 4번
// 내림차순으로 정렬
let abc = [5, 2, 1, -10, 8];
abc.sort((a,b)=>b-a);
alert(abc)

// 5번
// 배열 복사본 정렬하기
function copySorted(arr){
  return  arr.slice().sort();
}
// arr.slice()로 원본 그대로 둔체로 복제 가능

// 6번
// 확장 가능한 계산기

// 모르겠음

// 7번
// 이름 매핑하기
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);
alert(names);

// 8번
// 객체 매핑하기
let joh = { name: "John", surname: "Smith", id: 1 };
let pet = { name: "Pete", surname: "Hunt", id: 2 };
let mar = { name: "Mary", surname: "Key", id: 3 };

let user = [ joh, pet, mar ];
// name과 surname 조합해 fullName 만들기
let userMapped = user.map((item,id) => {
  let fullName = item.name + ' ' + item.surname;
  id += 1;
  return { "fullName":fullName, id}
})

// 9번
// 나이를 기준으로 객체 정렬
// 객체의 프로퍼티 또는 값을 기준으로 정렬하는 방법 
function sortByAge(arr){
  arr.sort((a,b)=> a.age - b.age);
}


// 10번
// 배열 요소 무작위로 섞기

// 모르겠다

// 11번
// 평균 나이 구하기
function getAverageAge(arr){
  let sumAge = arr.reduce((sum, current) => sum + current, 0);
  let avgAge = sumAge / arr.length;
  return avgAge;
}

// 12번
// 중복 없는 요소 찾아내기
function unique(arr){
  let result = [];
  for (var i = 0; i < arr.length; i++){
    if (!result.includes(arr[i])) { // result 배열에 arr 속 요소가 없다면~
      result.push(arr[i]); // 그 요소를 result 배열에 push해주세요
    }
  }
  return result;
}