const evaluate=(expression: string): number|String=> {
  let result: number | undefined;
  const tokens = expression.split(/\s+/);
  const stack: number[] = [];
  let first: number | undefined;
  let second: number | undefined;
  const containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(expression);

  if (containsInvalidChars) {
    return "NaN";
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === '*') {
      second = stack.pop();
      first = stack.pop();

      if (typeof first === 'undefined') {
        first = 1;
      }

      if (typeof second === 'undefined') {
        second = 1;
      }

      stack.push(first * second);
    } else if (token === '/') {
      second = stack.pop();
      first = stack.pop();

      if (typeof second === 'undefined' || second === 0) {
        return "NaN";
      }

      stack.push(first! / second);
    } else if (token === '+') {
      second = stack.pop();
      first = stack.pop();

      if (typeof first === 'undefined') {
        first = 0;
      }

      if (typeof second === 'undefined') {
        second = 0;
      }

      stack.push(first + second);
    } else if (token === '-') {
      second = stack.pop();
      first = stack.pop();

      if (typeof second === 'undefined') {
        second = 0;
      }

      stack.push(first! - second);
    } else {
      if (!isNaN(Number(token))) {
        stack.push(Number(token));
      }
    }
  }

  result = stack.pop();

  return typeof result !== 'undefined' ? result : "NaN";
}

export default evaluate;
