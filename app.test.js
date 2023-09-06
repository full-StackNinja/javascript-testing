/* eslint-disable no-undef */
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./app";

test("make first letter capital", () => {
  expect(capitalize("imran Hussain")).toEqual("Imran Hussain");
});

test("reverse the given string", () => {
  expect(reverseString("Momina")).toEqual("animoM");
});

test("add two numbers", () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(9, 8)).toBe(1);
});

test("divide two numbers", () => {
  expect(calculator.divide(7, 3)).toBeCloseTo(2.333);
  expect(calculator.divide(4, 0)).toBeCloseTo(Infinity);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(12, 11)).toBe(132);
});
test("shift numbers by some const offset", () => {
  expect(caesarCipher("This is my advice Zohaib", 1)).toEqual("Uijt jt nz bewjdf Apibjc");
  expect(caesarCipher("this is why", 5)).toEqual("ymnx nx bmd");
});

test("analize array and return object", () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});
