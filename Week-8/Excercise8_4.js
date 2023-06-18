class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class StackWithLinkedList {
    /***
     * @param {Array<any>} arr
     * */
    constructor(arr = []) {
        this.size = 0;
        if(arr.length > 0){
            arr.forEach(element => {
                this.push(element);
            });
        } else {
            this.top = null;
        }
    }

    push(value) {
        let node = new LinkedListNode(value);
        if(this.top) {
            node.next = this.top;
        }
        this.top = node;
        this.size++;
    }

    pop() {
        if(this.top === null) {
            throw new Error("Stack under flow");
        }

        let value = this.top.value;
        this.top = this.top.next;
        this.size--;
        return value;
    }

    get peek() {
        if(this.top) {
            return  this.top.value;
        } else {
            return null;
        }
    }

    get length() {
        return this.size;
    }

    toString() {
        if(this.top) {
            let tempStk = {...this.top};
            let str = tempStk.value;
            while(tempStk && tempStk.next) {
                str = `${tempStk.next.value} ${str}`;
                tempStk = {...tempStk.next};
            }
            return str;
        } else {
            return '';
        }
    }
}
class Stack {
    /***
     * @param {Array<any>} arr
     */
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

    toString() {
        return this.arr.join(' ');
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

/**
 * 
 * @param {StackWithLinkedList} stk 
 */
function isBalancedStackWithLinkedList(stk) {
    let tempStk = new StackWithLinkedList();
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

let exp3 = '{[]}';
const stack3 = new StackWithLinkedList(exp3.split(''));
console.log(isBalancedStackWithLinkedList(stack3)); // Output: true

let exp4 = '({[])}';
const stack4 = new StackWithLinkedList(exp4.split(''));
console.log(isBalancedStackWithLinkedList(stack4)); // Output: false
