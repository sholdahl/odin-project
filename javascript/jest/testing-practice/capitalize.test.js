import capitalize from "./capitalize"

test('capitalizes a string', () => {
  expect(capitalize("test")).toBe("Test");
});