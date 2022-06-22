const React = (() => {
  let _privateVal;
  function useState(initVal) {
    const state = _privateVal || initVal;
    const setState = (newVal) => {
      _privateVal = newVal;
    }
    return [state, setState];
  }
  return { useState };
})();

let [count, setCount] = React.useState(3);  //1
setCount(5);
[count, setCount] = React.useState(3);  //2
console.log(count)



