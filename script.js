export function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export function caesarCipher(str, shift) {
  let result = "";
  const normalizedShift = shift % 26

  for (let char of str) {
    let code = char.charCodeAt(0);

    if (97 <= code && code <= 122) {
      // Shift and wrap
      let shiftedCode = code + normalizedShift;
      if (shiftedCode > 122) shiftedCode -= 26;
      if (shiftedCode < 97) shiftedCode += 26;
      result += String.fromCharCode(shiftedCode)
      
    } else if (65 <= code && code <= 90) {
      // Shift and wrap
      let shiftedCode = code + normalizedShift;
      if (shiftedCode > 90) shiftedCode -= 26;
      if (shiftedCode < 65) shiftedCode += 26;
      result += String.fromCharCode(shiftedCode)

    } else {
      result += char;
    }
  }

  return result;
}


export function analyzeArray(arr) {
    const object = {
    average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }

  return object;
}