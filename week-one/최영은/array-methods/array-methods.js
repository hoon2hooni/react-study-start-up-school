"use strict";

// //1번
//border - left - width를 borderLeftWidth로 변경하기
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

const camelize = (str) => {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

// //2번
// //배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.

const filterRange = (arr, a, b) => {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);//배열을 반환
console.log(filtered);//[3,1]
console.log(arr);

//3번
//특정 범위에 속하는 요소 찾기(배열 변경하기)
//배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    //범위 밖의 요소 제거 
    if (value < a || value > b) { //또는 - 둘 중 하나만 해당해도 true
      arr.splice(i, 1); //i부터 1개 제거
      i--;
    }
  }
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
console.log(arr2);

//4번
//내림차순으로 정렬
let arr3 = [5, 2, 1, -10, 8];
arr3.sort((a, b) => b - a);
console.log(arr3);

//5번
//배열 복사본을 정렬하기
//slice()를 사용해 배열을 복사하여 다시 정렬
const copySorted = (arr) => {
  return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr4);  // HTML, JavaScript, CSS (no changes)

//6번(모르겠음😅)
//확장 가능한 계산기
//this.methods 프로퍼티 사용
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

//7번
//이름 매핑하기
//name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

alert(names); // John, Pete, Mary

//8번
//객체 매핑하기
//name과 surname을 조합해 fullName을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.

let joh = { name: "John", surname: "Smith", id: 1 };
let pet = { name: "Pete", surname: "Hunt", id: 2 };
let mar = { name: "Mary", surname: "Key", id: 3 };

let users2 = [joh, pet, mar];

let usersMapped = users2.map(item => ({//괄호 주의
  fullName: `${item.name} ${item.surname}`,
  id: item.id
}));

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);

//9번
//나이를 기준으로 객체 정렬하기
//프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr5 = [pete2, john2, mary2];

sortByAge(arr5);

// now: [john, mary, pete]
alert(arr5[0].name); // John
alert(arr5[1].name); // Mary
alert(arr5[2].name); // Pete

//10번(어려움😅)
//배열 요소 무작위로 섞기
//배열의 요소를 무작위로 섞어 주는 함수를 작성해보세요.
//모든 순열이 동일한 확률로 일어나야한다. => "피셔-예이츠 셔플 알고리즘" : 배열 끝 요소부터 시작해 앞으로 하나씩 나아가면서 해당 요소 앞에 있는 임의의 요소와 해당 요소를 바꿔치기 하는 알고리즘이다. 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

//11번
//평균 나이 구하기 
//age를 나타내는 프로퍼티를 가진 객체가 여러 개 담긴 배열이 있습니다. 평균 나이를 반환해주는 함수 getAverageAge(users)를 작성해보세요.
const getAverageAge = (arr) => { //reduce 사용하기
  return arr.reduce((pre, user) => pre + user.age, 0) / arr.length;
}

let jo = { name: "John", age: 25 };
let pe = { name: "Pete", age: 30 };
let ma = { name: "Mary", age: 29 };

let arr7 = [jo, pe, ma];

alert(getAverageAge(arr7)); // (25 + 30 + 29) / 3 = 28

//12번 
//중복 없는 요소 찾아내기 (includes 활용)
//배열 내 유일한 요소를 찾아주는 함수 unique(arr) 작성하기
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings)); // Hare, Krishna, :-O

//13번 (어려움 😅)
//Create keyed object from array (reduce 사용하기)
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let user3 = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(user3);

