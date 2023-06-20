import capitalize from "./capitalize";

test("capitalize 1", () => {
  expect(capitalize("sChooL")).toBe("School");
});

test("capitalize 2", () => {
  expect(capitalize("ApPLe")).toBe("Apple");
});
