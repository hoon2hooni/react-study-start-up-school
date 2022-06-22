"use strict";

//1번입니다.
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert(fruits.length); // 4, 배열은 객체라서 같은 배열을 참조하기 때문

//2번입니다.
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);

//3번입니다.
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
})

arr[2](); // a,b,function(){alert(this);}

//4번입니다.
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("숫자 입력", 0);
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());

//5번입니다.
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}


alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0
