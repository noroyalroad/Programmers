let fs = require("fs");
    let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
    let N = input.shift();
    input = input.shift().split(' ').map(Number);

const b2493 = ( arr) => {
  let stack = [];
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length !== 0) {
      while (stack.length) {
        if (arr[stack[stack.length - 1]] <= arr[i]) {
          stack.pop();
        } else {
          break;
        }
      }
    }
    stack.push(i);
    
    if (stack.length === 1) {
      answer.push(0);
    } else {
      answer.push(stack[stack.length - 2] + 1);
    }
  }

  console.log(answer.join(" "));
};

b2493(input);