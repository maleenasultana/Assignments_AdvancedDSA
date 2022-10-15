/**
 * node --consists of value and next.
 * 
 * speaial pointers--head and tail.--------------null at the end
 * 
 * slower than array because it doesn't store elements contigously in memory...
 * 
 * three types---singly,Doubly and circular.
 */

/**
 * Important five steps of Linked List
 */

/**
 * 1..function for creating new Node object
 * 2..LinkedList class with proper constructor
 * 3..create insert()and print()methods 
 * 4.. create the remove method to remove nodes
 * 5..create functions for insert and remove from head
 */

//lets start...........................

//Singly Linked List...................

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


let newNode = new Node(100);
console.log(newNode);// o/p = Node { value: 100, next: null }

class LinkedList {
    constructor () {
        this.head=null;
        this.tail=null;//for working from two side ...
        this.length=0;
    }

    //for inserting values in Linked list....
    insert(value){
       this.length++;
       let newNode =  new Node(value); 
        if(this.tail){
        this.tail.next = newNode;
        this.tail = newNode;
        return newNode;
      }
      this.head = this.tail = newNode;
      return newNode;
    }

    //for printing the value........

    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current= current.next;
        }
    }
    /**
     * steps to remove the last node....
     * decrement the length property.
     * search for the node that has the next property points to the tail node
     * set the tail to point to the previous node
     * set the tail.next value to null
     */

    remove(){
        if(this.tail){
            this.length--;
            const tailNode= this.tail;

            //search for the node
            let currentNode = this.head;

            //while loop searches untill last node
            while(currentNode.next != tailNode){
                currentNode = currentNode.next;
            }
            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next =null;

            return this.tailNode;
        }
        return undefined;
    }

    //insert from head................
    insertHead(value){
        this.length++;
        let newNode = new Node(value);

        if(this.head){
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }
        this.head = this.tail= newNode;
        return newNode;
    }

    removeHead(){
        if(this.head){
            this.length--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
    }
    
    //insert on a index

    insertIndex(value, index){
        if(index >= this.length){
            throw new Error("insert index out of bounds");  
        }
        if(index === 0){
            return this.insertHead(value);
        }
        let previousNode = null;
        let currentNode = this.head;
        for(let i= 0; i<index; i++){
            previousNode = currentNode;
            currentNode = currentNode.next;
            const newNode = new Node(value);

            newNode.next = currentNode;
            previousNode.next =newNode;
            this.length++;
            return newNode;
        }
    }
    removeIndex(index){
       if(index >= this.length){
        throw new Error("Remove index out of  bounds");
       }
       if(index === 0){
        return this.removeHead();
       }
       let previousNode = null;
       let currentNode = this.head;
       for(let i =0; i< index; i++){
        previousNode = currentNode;
        currentNode = currentNode.next;

        previousNode.next =currentNode.next;
        this.length--;
        return currentNode;
       }
    }
}

const ll = new LinkedList();
ll.insert(7);
ll.insert(true);
ll.insert("twenty");
ll.insert(30)
ll.insertIndex(`the Vale at index 1 is : ` + 20,1)
ll.removeIndex(2)

ll.print();
console.log(`The length of Linked List is : ${ll.length}`);