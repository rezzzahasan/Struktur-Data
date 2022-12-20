class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    peek() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.peek()); // Output: 1
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.peek()); // Output: 2
  console.log(queue.isEmpty()); // Output: false
