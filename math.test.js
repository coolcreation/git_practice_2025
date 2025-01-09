const { add, subtract, divide, multiply } = require("./math");

describe("Math.js tests", () => {

  it("adds two numbers correctly", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("subtracts two numbers correctly", () => {
    expect(subtract(2, 2)).toBe(0);
  });

  it("divides two numbers correctly", () => {
    expect(divide(2, 2)).toBe(1);
  });

  it("multiplys two numbers correctly", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
