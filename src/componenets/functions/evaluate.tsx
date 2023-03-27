export const evaluate=(expression: string):number | string=> {
    const tokens = expression.split(' ');
  
    const stack: number[] = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!isNaN(Number(token))) {
        stack.push(parseFloat(token));
      } else {
        const a = stack.pop();
        const b = stack.pop();
        if (typeof a !== 'number' || typeof b !== 'number') {
          return 'NaN';
        }
        switch (token) {
          case '+':
            stack.push(b + a);
            break;
          case '-':
            stack.push(b - a);
            break;
          case '*':
            stack.push(b * a);
            break;
          case '/':
            stack.push(b / a);
            break;
          default:
            return 'NaN';
        }
      }
    }
    if (stack.length === 1 && typeof stack[0] === 'number') {
      return stack.pop()!;
    } else {
      return 'NaN';
    }
  }