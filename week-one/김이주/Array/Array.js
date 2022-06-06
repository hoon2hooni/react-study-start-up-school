// 1번
// 배열은 복사가 될까요?
"use strict";

let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert(fruits.length); // ?

// 해설
// 4, 배열은 복사가 된다.

// 2번
// 배열과 관련된 연산

// 배열과 관련된 다섯 가지 연산을 해봅시다.

// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
let styles = ["Jazz", "Blues"];
alert(styles);

// "Rock-n-Roll"을 배열 끝에 추가합니다.
styles.push("Rock-n-Roll");
alert(styles);

// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
styles[1] = "Classics";
alert(styles);

// 배열의 첫 번째 요소를 꺼내서 출력합니다.
alert(styles.shift());
alert(styles);

// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
styles.unshift("Rap", "Raggae");
alert(styles);

// 3번
// 배열 컨텍스트에서 함수 호출하기

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // ?

// 해설
// function이 나올 것 같다




// 4번
// 입력한 숫자의 합 구하기

// 아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

// prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
// 숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
// 배열 요소의 합을 계산하고 리턴합니다.
// 주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.
function sumInput() {
  let numberArr = [];

  while (true) {
    let userInput = prompt("숫자를 입력해주세요: ");
    if (userInput === null || userInput === "" || !isFinite(userInput)) {
      break;
    }
    numberArr.push(parseInt(userInput));
  }

  let sum = 0;
  for (let number of numberArr) {
    sum += number;
  }
  return sum;
}

alert(sumInput());



// 5번
// 최대합 부분 배열
let ar = [1,2,0,-4,5];
function getMaxSubSum(arr) {
  let maxSum = 0;
  let idxSum = 0;

  for (let item of arr){
    idxSum += item;
    maxSum = Math.max(maxSum,idxSum);
    if (idxSum<0) idxSum = 0;
  }

  return maxSum;
}
alert( getMaxSubSum([-1,2,3,-5,10,-6,5,6]))

// 각 배열 요소를 더한 값을 저장하고 그 값을 새로운 요소를 더한 값과 비교한다.
