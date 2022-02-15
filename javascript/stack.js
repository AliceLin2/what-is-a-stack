class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if(this.stack.length<this.limit){
      this.stack.push(item)
      return this.stack
    }else{
      return error
    }
  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop()
  }

  // return item at top of stack without removing it
  peek() {
    return this.stack[this.stack.length-1]
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    if(this.stack.length===0){
      return true
    }else{
      return false
    }
  } 

  // return true if stack is full, otherwise false
  isFull() {
    if(this.stack.length===this.limit){
      return true
    }else{
      return false
    }
  }

  // return number of items in stack
  size() {
    return this.stack.length
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
    if(this.stack.indexOf(target)===-1){
      return -1
    }else{
      return this.stack.length-1-this.stack.indexOf(target)
    }
  }

  // print contents of stack: do not return the stack itself!
  print() {
    for (let item of this.stack){
      console.log(item)
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  const testStack = new Stack()
  testStack.stack = [4,8,3,6]

  console.log("Expecting: [4,8,3,6,5]");
  console.log("=>", testStack.push(5));

  console.log("Expecting: 5");
  console.log("=>", testStack.pop());

  console.log("Expecting: 6");
  console.log("=>", testStack.peek());

  console.log("Expecting: false");
  console.log("=>", testStack.isEmpty());

  console.log("Expecting: false");
  console.log("=>", testStack.isFull());

  console.log("Expecting: 4");
  console.log("=>", testStack.size());

  console.log("Expecting: 2");
  console.log("=>", testStack.search(8));

  console.log("Expecting: 4, 8, 3, 6");
  console.log("=>", testStack.print());
}

module.exports = Stack;
