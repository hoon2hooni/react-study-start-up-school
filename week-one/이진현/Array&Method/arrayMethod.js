// 1
// function camelize(str){
    
//     let strArray = str.split('-') //[sdf,sfe,sef]
//     strArray.map(
//         (word,index) => 
//                 index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         ) 
//     let result = strArray.join('')
        
//     return result
// }

// alert(camelize("my-Short-String"))


// 2

// function filterRange(arr,a,b) {
//     return arr.filter(item=>(a<=item && item<=b));
// }

// let arr = [5,3,8,1];
// let filtered = filterRange(arr,1,4);
// alert(filtered);
// alert(arr)

// //3
// let arr3 = [5,2,1,-10,8];

// function compareNumeric(a,b) {
//     if (a>b) return -1 ;
//     if (a==b) return 0 ;
//     if (a<b) return 1;
// }
// arr3.sort(compareNumeric);
// //arr3.sort((a,b)=> b-a);

// alert(arr3)

//4
// let arr4 = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr){
//     let coppiedArr = arr.map(item=>item)
//     return coppiedArr.sort()
// }
// //arr.slice()를 호출하여 arr의 복사본을 만들기도 함. 
// // return arr.slice().sort();

// let sorted = copySorted(arr4);

// alert(sorted)
// // alert(arr4)

// //5 확장 가능한 계산기
// let calc = new Calculator;

// function Calculator() {

//     this.methods = {
//         '+' : (a,b) => a+b,
//         '-' : (a,b) => a-b
//     };
    
//     this.calculate = function(str){
//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//     return this.methods[op](a,b);
//     };

//     this.addMethod = function(name,func) {
//         this.methods[name] = func;
//     }
// };

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// // 6 이름 매핑하기
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item=> item.name)

// alert( names ); // John, Pete, Ma


// //7 배열 요소를 무작위로 섞기

// function shuffle(arr){
//     arr.sort(()=> Math.random() - 0.5);
// }

// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
// }

// for (let i = 0; i < 1000000; i++) {
//     let array = [1,2,3];
//     shuffle(array);
//     count[array.join()]++;
// }

// for(let key in count) {
//     alert(`${key}:${count[key]}`)
// }

// //7중복나이구하기

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr) {
//     let age = arr.map(item => item.age)
//     let a = +age[0];
//     let b = +age[1];
//     let c = +age[2];
//     return (a+b+c) / age.length
//     //return arr.reduce((prev,current)=> prev+current.age ,0/arr.length;)
// }

// alert(getAverageAge(arr));