const delay = (ms) =>
  new Promise((resolve) => {
    console.log(`${ms}만큼 딜레이 중 입니다.`);
    setTimeout(() => {
      resolve("응답");
    }, ms);
  });

delay(3000).then((res) => console.log(`${res}완료`));
