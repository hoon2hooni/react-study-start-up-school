import { pow } from "./function";

it("pow 테스트", () => {
  expect(pow(3, 3)).toBe(27);
  expect(pow(2, 0)).toBe(1);
  expect(pow(1, 1000)).toBe(1);
});
