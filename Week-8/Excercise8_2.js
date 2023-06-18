class LinkListNode {
    constructor(element, next = null) {
        this.head = element;
        this.next = next;
    }
}

const linkList1 = new LinkListNode(2, new LinkListNode(4, new LinkListNode(7, new LinkListNode(8, new LinkListNode(9)))));
const linkList2 = new LinkListNode(1, new LinkListNode(2, new LinkListNode(3, new LinkListNode(4, new LinkListNode(5, new LinkListNode(6, new LinkListNode(7, new LinkListNode(8))))))));

let rotatedLinkList = null;
function rotate(ll, numberOfTimes) {
    for (let index = 0; index < numberOfTimes; index++) {
        // Get the Last Element
        let lastNode = getLastNode(ll);
        // Get Link List Without Last Element
        let linkListWihoutLastElement = eleminateLastNode(ll);
        // Assign List Wihout Last Element to Previously recieved Last Element
        lastNode.next = linkListWihoutLastElement;
        ll = lastNode;
    }

    return ll;
}

function getLastNode(ll) {
    if (ll.next !== null) {
        return getLastNode(ll.next);
    }

    return ll;
}

function eleminateLastNode(ll){
    let newLL = new LinkListNode(ll.head);
    let currentNode = ll;
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
        if(currentNode.next !== null)
            newLL = pushIntoLinkedList(newLL, currentNode.head);
    }
    
    return newLL;
}
function pushIntoLinkedList(ll, value) {
    if(ll.next !== null) {
        return new LinkListNode(ll.head, pushIntoLinkedList(ll.next, value));
    }

    ll.next = new LinkListNode(value);
    return ll;
}

console.log(JSON.stringify(rotate(linkList1, 2)))
// ------------------------------------------------------
// | Rotate Array                                       |
// ------------------------------------------------------
// function rotate(arr, numberOfTimes) {
//     for (let i = 1; i <= numberOfTimes; i++) {
//         const element = arr.shift();
//         arr.push(element);
//     }

//     return arr;
// }

// let arr = [2, 4, 7, 8, 9];
// console.log(rotate(arr, 3));  // Output: 8 9 2 4 7

// arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(rotate(arr, 4));  // Output: 5 6 7 8 1 2 3 4
