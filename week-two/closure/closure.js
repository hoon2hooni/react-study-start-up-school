"use strict";
// Poiema Web 클로저 예제 1
// 증가와 감소 각각 독립적으로 counter 변수를 사용
function makeCounter(predicate) {
  let counter = 0;
  return function () {
    counter = predicate(counter);
    return counter;
  };
}
function increase(n) {
  return ++n;
}
function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase);
// console.log(increaser());
// console.log(increaser());

const decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());

// Poiema Web 예제 2

function Counter() {
  let counter = 0;

  this.increase = function () {
    return ++counter;
  };

  this.decrease = function () {
    return --counter;
  };
}

const counter = new Counter();
// console.log(counter.increase());
// console.log(counter.decrease());

// javascript useState 영상 예제
// 상태를 기억하는 어떤 함수를 만들 때,
// 전역변수를 사용하여 아래와 같이 코드를 짤 수 있다.
let foo = 1;
function add() {
  foo = foo + 1;
  return foo;
}

console.log(add());
console.log(add());
console.log(add());
foo = 9999; // 하지만 전역변수를 사용하면 의도치 않은 재할당이 발생하여 코드가 더러워질 수 있다.
console.log(add());
console.log(add());

// 아래 처럼 클로져를 사용하면...
// 상태를 유지하면서 변수를 안전하게 보관할 수 있다.

const sadd = (function getAdd() {
  let foo = 1;
  return function add() {
    foo = foo + 1;
    return foo;
  };
})();
console.log(sadd());
console.log(sadd());
console.log(sadd());
foo = 999;
console.log(sadd());
console.log(sadd());

// clone useState
const React = (function () {
  let hooks = [];
  let idx = 0;
  function useState(initVal) {
    const state = hooks[idx] || initVal;
    const _idx = idx;
    const setState = (newVal) => {
      hooks[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }
  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }
  function useEffect(cb, depArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]))
    }
    if (hasChanged) cb();
    hooks[idx] = depArray;
    idx++;
  }
  return { useState, render, useEffect };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("apple");
  React.useEffect(() => {
    console.log("jsonfffff");
  }, [count]);
  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type("pear");
var App = React.render(Component);
App.click();
var App = React.render(Component);