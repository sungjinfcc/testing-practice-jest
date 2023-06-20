import caesarCipher from "./caesarCipher";

test("caesarCipher 1", () => {
  expect(caesarCipher("Apple", 1)).toBe("Bqqmf");
});
test("caesarCipher 2", () => {
  expect(caesarCipher("ApPl.e", 1)).toBe("BqQm.f");
});
test("caesarCipher 3", () => {
  expect(caesarCipher("Applz", 1)).toBe("Bqqma");
});
test("caesarCipher 4", () => {
  expect(caesarCipher("Applz", 25)).toBe("Zooky");
});
test("caesarCipher 5", () => {
  expect(caesarCipher("Applz", 51)).toBe("Zooky");
});
test("caesarCipher 6", () => {
  expect(caesarCipher("Applz", 77)).toBe("Zooky");
});
