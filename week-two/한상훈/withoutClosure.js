let foo = 3;
function withoutClosureAdd() {
  foo += 1;
  return foo;
}
console.log(withoutClosureAdd());
console.log(withoutClosureAdd());
console.log(withoutClosureAdd());
console.log(withoutClosureAdd());
console.log(withoutClosureAdd());
foo = 99999;
console.log(withoutClosureAdd());

withoutClosureAdd();
