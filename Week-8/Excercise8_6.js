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

/**
 * Queue Implementation using normal approach
 */
/*
class Queue {
    constructor() {
        this.frontPointer = null;
        this.rearPointer = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new LinkedListNode(value);
        if(this.frontPointer === null && this.rearPointer === null) {
            this.frontPointer = newNode;
            this.rearPointer = newNode;
        } else {
            this.rearPointer.next = newNode;
            this.rearPointer = newNode;
        }
        this.size++;
    }

    dequeue() {
        if(this.isEmpty) {
            throw new Error("Queue is Empty!");
        }

        const value = this.frontPointer.value;
        this.frontPointer = this.frontPointer.next;
        if (this.frontPointer === null) {
            this.rearPointer == null;
        }
        this.size--;
        return value;
    }

    get front () {
        if(this.frontPointer) {
            return this.frontPointer.value;
        } else {
            throw new Error('Queue is Empty!');
        }
    }

    get rear() {
        if(this.rearPointer) {
            return this.rearPointer.value;
        } else {
            throw new Error('Queue is Empty!');
        }
    }
    get length() {
        return this.size;
        // return this.items.length;
    }

    get isEmpty() {
        return this.length === 0;
    }

    toString() {
        let str = '';
        let current = this.frontPointer;
        while(current) {
            str = `${str} ${current.value}`
            current = current.next;
        }

        return str;
    }
}
 */
class Queue {
    constructor() {
        this.mainStk = new StackWithLinkedList();
        this.tempStk = new StackWithLinkedList();
        this.size = 0;
    }

    enqueue(value) {
        this.mainStk.push(value);
    }

    dequeue() {
        if (this.isEmpty) {
            throw new Error('Queue is Empty!');
        }

        if (this.tempStk.length === 0) {
            while(this.mainStk.length > 0) {
                this.tempStk.push(this.mainStk.pop());
            }
        }

        return this.tempStk.pop();
    }

    get front () {
        if (this.tempStk.length === 0) {
            while(this.mainStk.length > 0) {
                this.tempStk.push(this.mainStk.pop());
            }
        }
        
        return this.tempStk.peek;
    }

    get rear() {
        let value = null;
        if (this.mainStk.length > 0) {
            value = this.mainStk.pop();
            this.mainStk.push(value);
        } else if (this.tempStk.length > 0) {
            let temp = new StackWithLinkedList();
            while (this.tempStk.length > 0) {
                temp.push(this.tempStk.pop());
            }
            value = temp.peek;
            while (temp.length > 0) {
                this.tempStk.push(temp.pop());
            }
        }
        
        return value;
    }
    get length() {
        return this.mainStk.length + this.tempStk.length;
        // return this.items.length;
    }

    get isEmpty() {
        return this.length === 0;
    }
}

function dequeueElements(numberOfElementsToDequeue, arr) {
    if (numberOfElementsToDequeue > arr.length) {
        throw new Error('Invalid Operation');
    }
    const queue = new Queue();
    for (let i = 0; i < arr.length; i++) {
        queue.enqueue(arr[i]);
    }

    let str = '';
    for (let i = 0; i < numberOfElementsToDequeue; i++) {
        str = `${str} ${queue.dequeue()}`;
    }

    console.log(str);
}

dequeueElements(2, [4, 3, 2, 1]); // Output 4 3
