import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./script.js";

test("capitalizes first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverses string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

describe("Math operations", () => {
  test("adds numbers", () => {
    expect(calculator.add(6, 3)).toBe(9);
  });

  test("subtracts numbers", () => {
    expect(calculator.subtract(6, 3)).toBe(3);
  });

  test("divides numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test("multiplies numbers", () => {
    expect(calculator.multiply(6, 3)).toBe(18);
  });
});

describe("Caesar Cipher", () => {
  test("cipher works", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("wraps text", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("punctuation unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
  })
})

// analyzeArray function 
describe("Analyses the array", () => {
  test("correct average", () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
  })

  test("correct min", () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
  })
  
  test("correct max", () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
  })

  test("correct length", () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
  })
})