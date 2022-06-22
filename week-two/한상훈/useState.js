const React = (function () {
  let hooks = [];
  let idx = 0;
  function useState(initVal) {
    //freeze technique 각 useState의 index는 유지되게!
    const _idx = idx;
    const state = hooks[_idx] || initVal;
    function setState(newVal) {
      hooks[_idx] = newVal;
    }
    idx++;
    return [state, setState];
  }

  function useEffect(cb, depArray) {
    let hasChanged = true;
    const oldDeps = hooks[idx];
    if (oldDeps) {
      //다른게 하나라도 있으면 true
      hasChanged = oldDeps.some(
        (item, index) => !Object.is(item, depArray[index])
      );
    }

    if (hasChanged) {
      cb();
    }
    hooks[idx] = depArray;
    idx++;
  }

  function render(Component) {
    idx = 0;
    C = Component();
    C.render();
    return C;
  }

  return { useState, render, useEffect };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("입력해주세요");
  if (Math.random() > 0.5) {
    React.useEffect(() => {
      console.log("effect works");
    }, []);
  }

  React.useEffect(() => {
    console.log("count effect works");
  }, [count]);
  React.useEffect(() => {
    console.log("without effect works");
  });
  return {
    render: () =>
      console.log(`<div>
      <p/>${count}<p/>
    <p/>${text}<p/>
    </div>`),
    click: () => setCount(count + 1),
    type: (text) => setText(text),
  };
}

let App = React.render(Component);
App.click();
App = React.render(Component);
App.type("123123");
App = React.render(Component);
