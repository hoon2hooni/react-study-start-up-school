let errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(new Error("this is wrong"));
  }, 1000);
});

errorPromise.then(
  (res) => console.log(res),
  (error) => console.log(error.message)
);

errorPromise
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error.message);
  });

new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .finally(() => console.log("프라미스가 준비되었습니다."))
  .catch((err) => console.log(err));
new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .finally(() => console.log("프라미스가 준비되었습니다."))
  .catch((err) => console.log(err));
new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .finally(() => console.log("프라미스가 준비되었습니다."))
  .catch((err) => console.log(err)); // <-- .catch에서 에러 객체를 다룰 수 있음
new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .finally(() => console.log("프라미스가 준비되었습니다."))
  .catch((err) => console.log(err));
