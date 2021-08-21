function calculateDivisors(a, b) {
  if (a > b) {
    throw new Error('second number should be bigger or equal to first number');
  }

  let hasThreeDivisors = 0;

  for (let i = a; i <= b; i += 1) {
    console.log(i);
    const divisor = calculateDivisor(i);

    if (divisor === 3) {
      hasThreeDivisors += 1;
    }
  }

  return hasThreeDivisors;
}

function createArray(n) {
  const arr = [];
  for (let i = 0; i <= n; i += 1) {
    arr.push(i);
  }

  return arr;
}

function calculateDivisor(n) {
  const array = createArray(n);

  return array.reduce((prevValue, curValue) => {
    const divisor = n % curValue;

    if (divisor === 0) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);
}

console.log('Result:', calculateDivisors(11, 50));
