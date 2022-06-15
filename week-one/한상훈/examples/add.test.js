import { add } from "./add";

describe("더하기 테스트를 실행합니다", () => {
  test("1번 더하기 입니다", () => {
    expect(add(2, 3)).toBe(5);
  });
});
