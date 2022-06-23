//퀴즈1
let fruits = ["사과","배","오렌지"]
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert( fruits.length ); // 4

// 퀴즈2
let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length-1)/2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap","Reggae") ;

//퀴즈3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function()

//퀴즈4
function sumInput(){
    let inputs = []
    for (input of inputs) {
        if (input.value == int) {
            input = prompt()
            inputs.push(input)
        } 
    }
    

}