import Calculator from "./calculator";

test("add", () => {
  expect(Calculator.add(2, 3)).toBe(5);
});
test("subtract", () => {
  expect(Calculator.subtract(2, 3)).toBe(-1);
});
test("divide", () => {
  expect(Calculator.divide(4, 2)).toBe(2);
});
test("multiply", () => {
  expect(Calculator.multiply(2, 3)).toBe(6);
});
