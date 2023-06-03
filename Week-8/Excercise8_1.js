class LinkListNode {
    constructor(element, next = null) {
        this.head = element;
        this.next = next;
    }
}
let linkList = new LinkListNode(1, new LinkListNode(2, new LinkListNode(3, new LinkListNode(4, new LinkListNode(5)))));
console.log("Input: ", JSON.stringify(linkList));

let reversedLinkedList = null;
/**
 * Approach One
 * @param {LinkListNode} ll 
 */
function reverseLinkListApproachOne(ll) {
    reversedLinkedList = new LinkListNode(ll.head, reversedLinkedList);
    if(ll.next !== null) {
        reverseLinkListApproachOne(ll.next);
    }
}

console.time("Approach One");
reverseLinkListApproachOne(linkList);
console.log("Approach One Result:", JSON.stringify(reversedLinkedList));
console.timeEnd("Approach One");


/**
 * Approach Two
 * @param {LinkListNode} ll 
 * @returns {LinkListNode}
 */
function reverseLinkListApproachTwo(ll) {
    if(ll.next !== null) {
        const temp = reverseLinkListApproachTwo(ll.next);
        return pushIntoLinkedList(temp, ll.head);
    }

    return new LinkListNode(ll.head);
}

/**
 * 
 * @param {LinkListNode} ll 
 * @param {number} value 
 * @returns {LinkListNode}
 */
function pushIntoLinkedList(ll, value) {
    if(ll.next !== null) {
        return new LinkListNode(ll.head, pushIntoLinkedList(ll.next, value));
    }

    ll.next = new LinkListNode(value);
    return ll;
}

console.time("Approach Two");
console.log("Approach Two Result:", JSON.stringify(reverseLinkListApproachTwo(linkList)));
console.timeEnd("Approach Two");

// Revese and Array
// function getReverseArray(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         const element = arr[i];
//         arr[i] = arr[arr.length -1 - i];
//         arr[arr.length -1 - i] = element;
//     }

//     return arr;
// }


// let a = [2, 7, 8, 9, 10];
// console.log(getReverseArray(a));
