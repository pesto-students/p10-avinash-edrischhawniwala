//Code Provided
function createStack1() {
    return { 
        items:[],
        push (item) {
            this.items.push(item);
        },
        pop () 
        {
            return this.items.pop();
        }
    };
}
const stack1 = createStack1();
stack1.push(10);
stack1.push(5);
console.log(stack1.pop());// => 5
console.log(stack1.items);// => [10]
stack1.items = [10, 100, 1000];// Encapsulation broken!



// Refactored Code
function createStack2() {
    let items = [];
    return { 
        push (item) {
            items.push(item);
        },
        pop () 
        {
            return items.pop();
        }
    };
}
const stack2 = createStack2();
stack2.push(10);
stack2.push(5);
console.log(stack2.pop());// => 5
console.log(stack2.items);// => undefined
