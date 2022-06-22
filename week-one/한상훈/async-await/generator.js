function* gen() {
  const a = yield 1;
  const b = yield true;
}

let iter = gen()

console.log(iter.next())
console.log(iter.next())