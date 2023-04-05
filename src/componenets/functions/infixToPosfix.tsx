const infixToPostfix=(expression: string): string =>{
  var result = "";
  var stack: string[] = [];
  var operators = ["*", "/", "+", "-"];
  var tokens = expression.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*/]/gi);
  var containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(expression);

  if (Array.isArray(tokens) && !containsInvalidChars) {
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (operators.indexOf(token) > -1) {
        while (
          stack.length &&
          operators.indexOf(stack[stack.length - 1]) > -1
        ) {
          var operator = stack.pop();
          result += " " + operator;
        }

        stack.push(token);
      } else if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        var item = stack.pop();

        while (item !== "(") {
          result += " " + item;
          item = stack.pop();
        }
      } else if (token) {
        result += " " + token;
      }
    }
  }

  while (stack.length) {
    var item = stack.pop();
    result += " " + item;
  }

  result = result.trim();

  return result.length >= 1 ? result : "NaN";
}

export default infixToPostfix;
