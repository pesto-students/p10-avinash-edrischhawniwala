class Stack {
    constructor(arr = []) {
        this.arr = arr;
    }
    push(value){
        this.arr.push(value);
    }

    pop() {
        if(this.arr.length === 0) {
            throw new Error("Stack under flow");
        }
        return this.arr.pop();
    }

    get peek() {
        return  this.arr[this.arr.length - 1];
    }

    get length() {
        return this.arr.length;
    }
}

function isClosingBracket(bracket) {
    return bracket === ')' || bracket ===  '}' || bracket ===  ']' || bracket ===  '>';
}

/**
 * 
 * @param {Stack} stk 
 */
function isBalanced(stk) {
    let tempStk = new Stack();
    while(stk.length > 0){
        const bracket = stk.pop();
        if(isClosingBracket(bracket)) {
            tempStk.push(bracket);
            
        } else {
            if (bracket === '(' && tempStk.peek === ')') {
                tempStk.pop();
                
            } else if (bracket === '{' && tempStk.peek === '}') {
                tempStk.pop();
                
            } else if (bracket === '[' && tempStk.peek === ']') {
                tempStk.pop();
                
            } else if (bracket === '<' && tempStk.peek === '>') {
                tempStk.pop();

            } else {
                return false;
            }
        }
    }

    return true;
}


let exp1 = '{[]}';
const stack1 = new Stack(exp1.split(''));
console.log(isBalanced(stack1)); // Output: true

let exp2 = '({[])}';
const stack2 = new Stack(exp2.split(''));
console.log(isBalanced(stack2)); // Output: false
