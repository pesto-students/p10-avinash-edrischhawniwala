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
 * 
 * @param {Array<number>} arr 
 */
function findNextGreatorElement(arr) {
    const stk = new StackWithLinkedList();
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[j] > current) {
                stk.push(arr[j]);
                break;
            } else if (j === arr.length) {
                stk.push(-1);
            }
        }
    }

    console.log(stk.toString());
}

findNextGreatorElement([1, 3, 2, 4]);