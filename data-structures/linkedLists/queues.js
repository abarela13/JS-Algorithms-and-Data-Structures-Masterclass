/*
	https://cs.slides.com/colt_steele/doubly-linked-lists

	Complexity:
	Insertion - O(1)
	Removal - O(1)
	Searching - O(N)
	Access - O(N)

	Scenerio - Joining game server | background tasks | printing / task processing
 */

class QueueNode {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new QueueNode(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}

	dequeue() {
		if (this.size === 0) return null;

		const temp = this.first;

		if (this.size === 1) {
			this.last = null;
			this.first = null;
		} else {
			this.first = this.first.next;
		}

		this.size--;

		return temp.value;
	}
}

const queue = new Queue();

queue.enqueue("1st");
queue.enqueue("2nd");
queue.enqueue("3rd");
queue.enqueue("4th");
queue.enqueue("5th");
console.log(queue);
