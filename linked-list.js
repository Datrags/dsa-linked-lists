/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head)
      throw new Error("This list is empty.")

    let temp = this.head;
    let prev = null;

    if (this.length == 1){
      this.head = null;
      this.tail = null;
    } else {
      while(temp.next) {
        prev = temp;
        temp = temp.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    


    this.length--;
    return temp.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head)
      throw new Error("This list is empty.")
    
   
    let v = this.head
    this.head = this.head.next;
    this.length--;

    if (!this.head){
      this.tail = null;
    }

    return v.val;
    
  
    
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx === 0) return this.head.val;
    if (idx < 0 || idx >= this.length)
      throw new Error("Index out of range.")
    
    let count = 0;

    let temp = this.head;
    while(temp) {

      if (count === idx){
        return temp.val;
      }
      count += 1;
      temp = temp.next;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length)
      throw new Error("Index out of range.")

    let temp = this.head;
    for (let i = 0; i < idx; i++) {
      temp = temp.next;
    }
    temp.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx < 0 || idx > this.length )
      
      throw new Error("Index out of range.");

    if (idx === this.length){
      this.push(val);
      return;
    }
    else if (idx === 0) {
      return this.unshift(val);
    }
    
    else {
      let newNode = new Node(val);
      let temp = this.head;
      let prev = null;
  
      
      for (let i = 0; i < idx; i++) {
        prev = temp;
        temp = temp.next;
      }
    
      newNode.next = temp;
      prev.next = newNode;
      this.length++;
    }
    
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length)
      throw new Error("Index out of range.")

    if (idx === this.length - 1){
      return this.pop();
    }
    else if (idx === 0){ 
      return this.shift();
    }
    else {
    
      let temp = this.head;
      let prev = null;
      
      
      for (let i = 0; i < idx; i++) {
        prev = temp;
        temp = temp.next;
      }
    
      
      prev.next = temp.next;
      this.length--;
      return temp.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {

    if(this.length == 0) return 0;

    let temp = this.head;
    let sum = 0;
    while(temp){
      sum += temp.val;
      temp = temp.next
    }
    
    return sum / this.length;
  }
}

module.exports = LinkedList;
