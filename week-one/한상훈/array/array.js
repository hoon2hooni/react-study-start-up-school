//1번
let fruits = ["사과", "배", "오렌지"];

let shoppingCart = fruits;
shoppingCart.push("바나나");

alert(fruits.length); // 4

// 2번

let styles = ["Jazz", "Blues"];

//Jazz, Blues, Rock-n-Roll
styles.push("Rock-n-Roll");

//Jazz, Classics, Rock-n-Roll
styles[Math.floor((styles.length - 1) / 2)] = "Classics";

//Classics, Rock-n-Roll
styles.shift();

//Rap, Reggae, Classics, Rock-n-Roll
styles.unshift(("Rap", "Raggae"));

//3번

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2]();
//"a","b", "Func"
//alert는 자동으로 toString해주고 호출

//4번
function alertSumInputsRepeatedPrompts() {
  const inputs = getInputsFromRepeatedPrompts();
  const sum = getSum(inputs);
  alert(sum);
}

function getInputsFromRepeatedPrompts() {
  const inputs = [];
  while (true) {
    const input = prompt("숫자를 입력하시겠습니까?");
    if (input === null || input === "" || !isFinite(input)) break;
    inputs.push(Number(input));
  }
  return inputs;
}

function getSum(inputNumbers) {
  let result = inputNumbers.length ? 0 : "입력된 숫자가 없습니다.";
  for (const num of inputNumbers) {
    result += num;
  }
  return result;
}

alertSumInputsRepeatedPrompts();

//5번
