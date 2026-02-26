import {add, subtract, divide, multiply} from "../src/calculator";


test("adicione 1 + 2", ()=>{
	expect(add(1, 2)).toBe(3);
})

// subtract
test("subtrai 10 - 3", () => {
  expect(subtract(10, 3)).toBe(7);
});

test("subtrai resultando em número negativo", () => {
  expect(subtract(3, 10)).toBe(-7);
});

// multiply
test("multiplica 3 * 4", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("multiplica por zero retorna zero", () => {
  expect(multiply(5, 0)).toBe(0);
});

test("multiplica números negativos", () => {
  expect(multiply(-2, 3)).toBe(-6);
});

// divide
test("divide 10 / 2", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divide por zero lança erro", () => {
  expect(() => divide(10, 0)).toThrow();
});

test("divide resultando em decimal", () => {
  expect(divide(1, 3)).toBeCloseTo(0.333);
});
