import { merge } from "../src/merge";

test("handle 1 element", () => {
  expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
  expect(merge([5], [4], [3])).toEqual([3, 4, 5]);
  expect(merge([8], [7], [9])).toEqual([7, 8, 9]);
});

test("generic", () => {
  expect(merge([1, 2, 3], [2, 3, 4], [5, 4, 3])).toEqual([
    1, 2, 2, 3, 3, 3, 4, 4, 5,
  ]);
  expect(merge([1, 2, 3], [1, 2, 3], [6, 5, 4])).toEqual([
    1, 1, 2, 2, 3, 3, 4, 5, 6,
  ]);
  expect(merge([2, 3, 4], [4, 5, 6], [9, 8, 7])).toEqual([
    2, 3, 4, 4, 5, 6, 7, 8, 9,
  ]);
});

test("handle empty array", () => {
  expect(merge([1], [2], [])).toEqual([1, 2]);
  expect(merge([5], [], [3])).toEqual([3, 5]);
  expect(merge([], [7], [9])).toEqual([7, 9]);
});
