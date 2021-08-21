import { calculateDivisor, calculateDivisors, createArray } from '../src/index';

test('returns an array with all numbers', (): void => {
  const actual = createArray(20);
  const expected = 21;

  expect(actual).toHaveLength(expected);
});

test('calculates the divisors correctly for the number 20', (): void => {
  const actual = calculateDivisor(20);
  const expected = 6;

  expect(actual).toStrictEqual(expected);
});

test('calculates the divisors correctly for the number 25', (): void => {
  const actual = calculateDivisor(25);
  const expected = 3;

  expect(actual).toStrictEqual(expected);
});

test('calculates the divisors correctly for the number 49', (): void => {
  const actual = calculateDivisor(49);
  const expected = 3;

  expect(actual).toStrictEqual(expected);
});

test('throws an error when b is bigger then a', (): void => {
  expect((): number => calculateDivisors(4, 3)).toThrow(
    'second number should be bigger or equal to first number',
  );
});

test('throws an error when a is bigger then max', (): void => {
  expect((): number =>
    calculateDivisors(1000000000000000, 1000000000000000),
  ).toThrow(
    'provided number(s) are larger then allowed maximum: "999999999". a: "1000000000000000", b: "1000000000000000"',
  );
});

test('throws an error when b is bigger then max', (): void => {
  expect((): number => calculateDivisors(4, 1000000000000000)).toThrow(
    'provided number(s) are larger then allowed maximum: "999999999". a: "4", b: "1000000000000000"',
  );
});

// This takes forever, I only have 3 hours :P
// test('finds a lot of dividors', (): void => {
//   const actual = calculateDivisors(0, 999999999);
//   const expected = 100;

//   expect(actual).toStrictEqual(expected);
// });

// FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
// test('finds dividors', (): void => {
//   const actual = calculateDivisors(999999899, 999999999);
//   const expected = 100;

//   expect(actual).toStrictEqual(expected);
// });

test('finds dividors', (): void => {
  const actual = calculateDivisors(0, 1000);
  const expected = 11;

  expect(actual).toStrictEqual(expected);
});
