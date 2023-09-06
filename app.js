function capitalize(string) {
  return string.substr(0, 1).toUpperCase() + string.substr(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function caesarCipher(string, offset) {
  const arr = string.split(" ");
  const caesar = [];
  arr.forEach((word) => {
    const caesarWord = [];
    word.split("").forEach((char) => {
      let code = char.charCodeAt(0);
      if (code > 64 && code < 91) {
        if (code + offset < 91) {
          code += offset;
        } else {
          code = 64 + (code + offset - 90);
        }
      } else if (code > 96 && code < 123) {
        if (code + offset < 123) {
          code += offset;
        } else {
          code = 96 + (code + offset - 122);
        }
      }
      caesarWord.push(String.fromCharCode(code));
    });
    caesar.push(caesarWord.join(""));
  });
  return caesar.join(" ");
}

function analyzeArray(arr) {
  const average = arr.reduce((sum, element) => sum + element) / arr.length;
  const min = arr.reduce((minimum, element) => (element < minimum ? element : minimum));
  const max = arr.reduce((maximum, value) => (maximum < value ? value : maximum));
  const { length } = arr;
  return { average, min, max, length };
}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
