export function calculateDivisors(a: number, b: number): number {
  if (a > b) {
    throw new Error('second number should be bigger or equal to first number');
  }

  const max = 1_000_000_000;

  if (a >= max || b >= max) {
    throw new Error(
      `provided number(s) are larger then allowed maximum: "${
        max - 1
      }". a: "${a}", b: "${b}"`,
    );
  }

  let hasThreeDivisors = 0;

  for (let i = a; i <= b; i += 1) {
    const divisor = calculateDivisor(i);

    if (divisor === 3) {
      hasThreeDivisors += 1;
    }
  }

  return hasThreeDivisors;
}

export function createArray(n: number): number[] {
  const arr = [];
  for (let i = 0; i <= n; i += 1) {
    arr.push(i);
  }

  return arr;
}

export function calculateDivisor(n: number): number {
  const array = createArray(n);

  return array.reduce((prevValue: number, curValue: number): number => {
    const divisor = n % curValue;

    if (divisor === 0) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);
}

// console.log('Result:', calculateDivisors(11, 50));
