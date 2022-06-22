let foo = 10000;
const closureAdd = function(){
  let foo = 3;
  return function add() {
    foo += 1;
    return foo;
  }
}

const addOne = closureAdd()


console.log(addOne())// 4
console.log(addOne()) // 5