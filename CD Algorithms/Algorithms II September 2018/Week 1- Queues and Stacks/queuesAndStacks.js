// SLQueue

function Node(val) {
  this.next = null;
  this.val = val;
}

function Queue() {
  this.head = null;
  this.tail = null;
  this.enqueue = function(val) {
    let nn = new Node(val);
    if (this.head == null) {
      this.head = nn;
      this.tail = nn;
    }
    else {
      this.tail.next = nn;
      this.tail = nn;
    }
    return this;
  }
  this.dequeue = function() {
    if (this.head == null) {
      return false;
    }
    let temp = this.head.val;
    this.head.next = this.head;
    return temp;
  }
  // Create SLQueue method front() to return the value at front of our queue, without removing it.
  this.front = function(){
    if (this.head){
      return this.head.val
    }
    return false;
  }
  // Create SLQueue method isEmpty() that returns whether our queue contains no values.
  this.isEmpty = function() {
    if (this.head) {
      let current = this.head;
      while (current) {
        if (current.val){
          return false;
        }
        current = current.next;
      }
      return true;
    }
  }
  this.contains = function(value) {
    if (this.head){
      let current = this.head;
      while (current) {
        if (current.val === value){
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
  this.size = function() {
    if (this.head){
      let count = 1;
      let current = this.head;
      while (current.next) {
        current = current.next;
        count ++;
      }
      return count;
    }
    return 0;
  }
}

// Given two SLQueue objects, create a standalone function that returns whether they are equal. Queues are equal only if they have equal elements in identical order. Allocate no other object, and return the queues in their original condition upon exit.

function compareQueues(q1, q2) {
  if (q1.head && q2.head) {
    let current1= q1.head;
    let current2= q2.head;
    while (current1) {
      if (current1.val === current2.val){
        current1 = current1.next;
        current2 = current2.next;
      }
      else {return [false, q1, q2]}
    }
    return [true, q1, q2];
  }
  return [false, q1, q2];
}

// Create a standalone function to remove an SLQueue ’s lowest value, otherwise leaving values in the same sequence. Use only local variables; allocate no other objects. Remove all duplicates of this value.

function removeMinimums(queue) {
  if (queue.head) {
    let min = queue.head.val;
    let current = queue.head;
    while (current) {
      if (current.val < min){min = current.val};
      current = current.next;
    }
    current = queue.head
    while (current){
      if (queue.head === min) {
        queue.head.next = queue.head;
      }
      else {
        if (current.next.val === min) {
          current.next = current.next.next;
        }
      }
    }
  }
  console.log(queue)
}


let q1 = new Queue();
let q2 = new Queue();

q1.enqueue(18).enqueue(4).enqueue(19);
q2.enqueue(18).enqueue(9).enqueue(19);

removeMinimums(q1);








// Circular Queue

function CircularQueue(capacity) {
  this.arr = [];
  this.arr.length = capacity;
  this.head = 0;
  this.tail = 0;
  this.size = 0;
  this.add = function(val) {
    if (this.size === this.arr.length) {
      return false;
    }
    this.arr[this.tail % this.arr.length] = val;
    this.tail += 1;
    this.size +=1;
    console.log(this.arr);
    return this;
  }
  this.remove = function(){
    if (this.size === 0) {
      return false;
    }
    let temp = this.arr[this.head % this.arr.length];
    this.head +=1;
    this.size -=1;
    console.log(this.arr)
    return temp;
  }
}

// q1 = new CircularQueue(4);
// q1.add(12).add(43).add(-13)
