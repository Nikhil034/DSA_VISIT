//Implement stack in JS LIFO

class StackV1 {
  constructor(size) {
    this.stack = new Array(size);
    this.size = size - 1;
    console.log(this.size);
    this.top = -1;
  }
  pushStack(value) {
    if (this.top > this.size - 1) {
      console.log("Stack full!");
    } else {
      this.top++;
      this.stack[this.top] = value;
    }
  }
  popStack() {
    if (this.top < 0) {
      console.log("Stack is underflow!");
    } else {
      let del = this.stack[this.top];
      this.top--;
      console.log("Poped value is", del);
    }
  }
  getStack() {
    for (let i = 0; i <= this.top; i++) {
      console.log(` ${this.stack[i]} `);
    }
  }
}

// let obj = new Stack(5);
// obj.pushStack(2);
// obj.pushStack(9);
// obj.pushStack(2);
// obj.pushStack(6);
// obj.pushStack(12);
// obj.popStack();
// obj.popStack();
// obj.getStack();

//Valid Parentheses

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.size = size;
    this.top = -1;
  }

  push(value) {
    if (this.top >= this.size - 1) {
      console.log("Stack overflow!");
      return false;
    }

    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  pop() {
    if (this.top < 0) {
      console.log("Stack underflow!");
      return null;
    }

    const removed = this.stack[this.top];
    this.top--;
    return removed;
  }

  peek() {
    if (this.top < 0) return null;
    return this.stack[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }
}

function isValidParentheses(str) {
  const matching = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = new Stack(str.length);

  for (let ch of str) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      const top = stack.pop();
      if (top !== matching[ch]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

const tests = ["([])", "([)]", "{[()]}", "([{}])", "((()"];
for (const test of tests) {
  console.log(`${test} -> ${isValidParentheses(test)}`);
}
