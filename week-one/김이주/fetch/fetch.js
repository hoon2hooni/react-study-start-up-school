'use strict';
// 1번
// fetch를 사용해 Github에서 사용자 정보 가져오기
// 사용자 이름이 담긴 배열을 인자로 받는 비동기 함수를 만들고,
// fetch한 사용자 정보들이 담긴 배열을 반환하는 함수 만들기
async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status !=200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }
  let results = await Promise.all(jobs);

  return results;
}