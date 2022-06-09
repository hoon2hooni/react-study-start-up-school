"use strict";
// 1. producer
const promise = new Promise((resolve, reject) => {
  // 프로미스 만드는 순간 자동적으로 콜백함수가 바로 실행된다.
  console.log("doing something...");
  setTimeout(() => {
    // resolve('ellie'); 성공했을 때 실행할 함수
    reject(new Error("no network")); // 거절될 때 실행할 함수
  }, 2000);
});

// 2. consumer: then, catch, finally
promise
  .then((value) => {
    // then 호출시 return promise
    console.log(value); // 성공했다면 then 코드를 실행하고
  })
  .catch((error) => {
    // return promise에 catch를 등록
    console.log(error); // 실패했다면 catch 코드를 실행한다.
  })
  .finally(() => {
    // 성공 실패 여부없이 실행
    console.log("finally");
  });

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 성공시 resolve 함수에게 인자 1을 전달해주라
});

fetchNumber
  .then((num) => num * 2) // resolve 함수의 인자로 받은 1을 num에 넣어준다. 성공하면 다음 .then을 실행한다.
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      // then은 값을 전달할 수도, promise를 전달할 수도 있다.
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`),1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // 만약 에러가 났다고 치자
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() // 프리티어가 한줄로 표시해주는데 그럼 가독성 떨어지니 주석을 하나 추가해주자.
  .then(getEgg) // hen => getEgg(hen) 를 생략한 것 getHen()에서 받아온 인자를 바로 다음 함수 인자로 넣어주는 경우 이처럼 생략이 가능하다.
  .catch((error) => {
    // 계란을 가져오는 부분에서 error가 발생했을 때 error 처리
    return "🍞";
  })
  .then(cook) // egg => cook(egg) 를 생략한 것
  .then((meal) => console.log(meal))
  .catch(console.log);

// 5. 콜백지옥 => 프로미스로 작성하기
class UserStorage {
  loginUser(id, pw) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "yiju" && pw === "123") ||
          (id === "yoonju" && pw === "456")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "yiju") {
          resolve({ name: "yiju", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your ID: ");
const pw = prompt("enter your PW: ");
userStorage
  .loginUser(id, pw)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);

// -------------------------- 과제 -------------------------
// 1번
// 프로미스로 지연 만들기
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}
delay(3000).then(() => alert(`3초후 실행`));

// 2번
// 프로미스로 애니메이션 적용된 원 만들기
function go() {
  showCircle(150,150,100).then(div => {
    div.classList.add('message-ball');
    div.append('안녕하세요!');
  });
}


function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 1000);
  });
}
