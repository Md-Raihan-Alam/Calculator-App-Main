export const infixToPostfix = (infix: string): string => {
    const postfix: string[] = [];
    const stack: string[] = [];
    let operand = '';
  
    const precedence: {[key: string]: number} = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    for (let i = 0; i < infix.length; i++) {
      const token = infix[i];
  
      if (!isNaN(Number(token)) || token === '.') {
        operand += token;
        continue;
      }
  
      if (operand) {
        postfix.push(operand);
        operand = '';
      }
  
      if (token === ' ') {
        continue;
      }
  
      while (
        stack.length > 0 &&
        precedence[stack[stack.length - 1]] >= precedence[token]
      ) {
        postfix.push(stack.pop()!);
      }
      stack.push(token);
    }
  
    if (operand) {
      postfix.push(operand);
    }
  
    while (stack.length > 0) {
      postfix.push(stack.pop()!);
    }
  
    return postfix.join(' ');
  };