import calculator from "./calculator";

test("add", () => {
    expect(calculator.add(90,10)).toBe(100);
});

test("subtract", () => {
    expect(calculator.subtract(15,10)).toBe(5);
});

test("multiply", () => {
    expect(calculator.multiply(5,5)).toBe(25);
});

test("divide", () => {
    expect(calculator.divide(10,5)).toBe(2);
});