
import { getMaxSubSum } from "./getMaxSubSum";

describe("getMaxSubSum", function () {
  it("maximal subsum of [1, 2, 3] equals 6", function () {
    expect(getMaxSubSum([1, 2, 3])).toBe(6);
  });

  it("maximal subsum of [-1, 2, 3, -9] equals 5", function () {
    expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
  });

  it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function () {
    expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
  });

  it("maximal subsum of [-2, -1, 1, 2] equals 3", function () {
    expect(getMaxSubSum([-2, -1, 1, 2])).toBe(3);
  });

  it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function () {
    expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100);
  });

  it("maximal subsum of [] equals 0", function () {
    expect(getMaxSubSum([])).toBe(0);
  });

  it("maximal subsum of [-1] equals 0", function () {
    expect(getMaxSubSum([-1])).toBe(0);
  });

  it("maximal subsum of [-1, -2] equals 0", function () {
    expect(getMaxSubSum([-1, -2])).toBe(0);
  });

  it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function () {
    expect(getMaxSubSum([2, -8, 5, -1, 2, -3, 2])).toBe(6);
  });
});
