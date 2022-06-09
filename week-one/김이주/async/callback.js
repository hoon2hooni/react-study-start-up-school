"use strict";
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

function printWithDelay(print, time) {
  setTimeout(print, time);
}
printWithDelay(() => console.log("async"), 1000);

// Callback hell example
class UserStorage {
  loginUser(id, pw, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "yiju" && pw === "123") ||
        (id === "yoonju" && pw === "456")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "yiju") {
        onSuccess({ name: "yiju", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your ID: ");
const pw = prompt("enter your PW: ");
userStorage.loginUser(
  id,
  pw,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log("error");
  }
);

// 1번
// 콜백을 이용한 움직이는 원
function go() {
  showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("안녕하세요!");
  });
}

function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      // div.style.height = radius * 2 + 'px';
    }, 1000);
    
    div.addEventListener('transitionend', function handler() {
      // div.removeEventListener('transitionend', handler);
      callback(div);
    });
  }