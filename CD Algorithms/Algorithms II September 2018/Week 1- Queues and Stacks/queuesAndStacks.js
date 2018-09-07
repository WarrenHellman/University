// SLQueue

function Node(val) {
  this.next = null;
  this.val = val;
}

function Queue() {
  this.head = null;
  this.tail = null;
}

let q1 = new Queue();











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

q1 = new CircularQueue(4);
q1.add(12).add(43).add(-13)
