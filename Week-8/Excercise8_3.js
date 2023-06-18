class LinkListNode {
    constructor(element, next = null) {
        this.isVisited = false;
        this.head = element;
        this.next = next;
    }
}

function isLoop(ll) {
    let current = ll;
    while(current.next !== null) {
        if(current.next.isVisited) {
            return true;
        }
        
        current.isVisited = true;
        current = current.next;
    }

    return false;
}
const node1 = new LinkListNode(1);
const node2 = new LinkListNode(2);
const node3 = new LinkListNode(3);
const node4 = new LinkListNode(4);

node3.next = node4;
node2.next = node3;
node1.next = node2;     
const linkList1 = node1;
console.log(isLoop(linkList1)); // 1 -> 2 -> 3 -> 4 // Output: false

const node5 = new LinkListNode(5);
const node6 = new LinkListNode(6);
const node7 = new LinkListNode(7);
const node8 = new LinkListNode(8);

node7.next = node8;
node6.next = node7;
node5.next = node6;
node8.next = node6;       
const linkList2 = node5;
console.log(isLoop(linkList2)); // 5 -> 6 -> 7 -> 8 -> 6 // Output: true