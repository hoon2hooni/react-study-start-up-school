// console.log("안녕");
// const awaitFirst = await Promise.resolve("hey");
// console.log(awaitFirst);
// console.log("반가워");

import axios from "axios";

// let user = await axios("/article/promise-chaining/user.json");
try {
  let response = await axios(`https://api.git.com/users/hoonooni`);
  // console.log(response);
  console.log("안녕");
} catch (error) {
  console.log("반가워");
}

// github 사용자 정보 읽기
