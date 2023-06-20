import reverseString from "./reverseString";

test("reverseString 1", () => {
  expect(reverseString("Apple")).toBe("elppA");
});
test("reverseString 2", () => {
  expect(reverseString("School")).toBe("loohcS");
});
