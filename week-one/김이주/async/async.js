"use strict";
// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "🍎";
}

async function getBanana() {
  await delay(3000);
  return "🍌";
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits.then(console.log);

// ---------------------------- 과제 ---------------------------
// 1번
// async와 await를 사용하여 코드 변경하기
async function loadJson(url) {
  let response = await fetch(url); // .then을 전부 await로 바꾼다.

  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson("no-such-user.json").catch(alert);

// 2번
// 잘 모르겠으니 반복작성해보자.
// 잘 모르겠으니 반복작성해보자.
// 잘 모르겠으니 반복작성해보자.
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    await response.json();
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Github username을 입력하세요.", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 사용자가 없습니다. 다시 입력해주세요.");
      } else {
        throw err;
      }
    }
  }
  alert(`이름: ${user.name}.`);
  return user;
}

demoGithubUser();

// 3번
// async가 아닌 함수에서 async 함수 호출
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(alert);
}

// 추가 문제 콜백 지옥 => 프로미스화 => async
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
async function checkUser() {
  try {
    const userId = await userStorage.loginUser(id, pw);
    const user = await userStorage.getRoles(userId);
    alert(`Hello ${user.name}, you have a ${user.role} role`);
  } catch (error) {
    console.log(error);
  }
}
checkUser();
