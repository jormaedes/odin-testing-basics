import analyzeArray from "../src/analyzeArray";

test("retorna o comprimento correto", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("retorna o valor mínimo", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("retorna o valor máximo", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("retorna a média correta", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("array com um único elemento", () => {
  expect(analyzeArray([5])).toEqual({ average: 5, min: 5, max: 5, length: 1 });
});

test("array com números negativos", () => {
  expect(analyzeArray([-3, -1, -2])).toEqual({ average: -2, min: -3, max: -1, length: 3 });
});