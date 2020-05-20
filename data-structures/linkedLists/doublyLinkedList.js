/*
	https://cs.slides.com/colt_steele/doubly-linked-lists

	Complexity:
	Insertion - O(1)
	Removal - O(1)
	Searching - O(N)
	Access - O(N)

	Scenerio - Webpages, have past page and next page (in case you returned)
 */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		var newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	pop() {
		if (this.length === 0) return undefined;

		const oldTail = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}

		this.length--;

		return oldTail;
	}

	shift() {
		if (!this.head) return undefined;

		const oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;

		return oldHead;
	}

	unshift(val) {
		var newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}

		this.length++;

		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;

		let counter = 0;
		let current = this.head;

		if (index <= Math.floor(this.length / 2)) {
			while (counter !== index) {
				current = current.next;
				counter++;
			}
		} else {
			counter = this.length - 1;
			current = this.tail;

			while (counter !== index) {
				current = current.prev;
				counter--;
			}
		}

		return current;
	}

	set(index, val) {
		var targetNode = this.get(index);

		if (targetNode !== null) {
			targetNode.val = val;
			return true;
		}

		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		var newNode = new Node(val);
		let before = this.get(index).prev;
		let after = before.next;

		before.next = newNode;
		newNode.next = after;
		after.prev = newNode;
		newNode.prev = before;

		this.length++;

		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const removedNode = this.get(index);
		const before = removedNode.prev;
		const after = removedNode.next;

		before.next = after;
		after.prev = before;
		removedNode.prev = null;
		removedNode.next = null;

		this.length--;

		return removedNode;
	}

	reverse() {
		if (this.length === 0) return undefined;
		if (this.length === 1) return this;

		var node = this.head;
		var prev = null;
		var next;

		this.head = this.tail;
		this.tail = node;

		for (var i = 0; i < this.length; i++) {
			next = node.next;

			node.next = prev;
			node.prev = next;

			prev = node;
			node = next;
		}

		return this;
	}

	print() {
		console.log(list);

		var arr = [];
		var current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

const list = new DoublyLinkedList();

// Push examples
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.print();

console.log("\n");
console.log("pop()");
console.log(list.pop());
list.print();

console.log("\n");
console.log("shift()");
console.log(list.shift());
list.print();

console.log("\n");
console.log("get(2)");
console.log(list.get(2));
list.print();

console.log("\n");
console.log("set(2)");
console.log(list.set(2, 100));
list.print();

console.log("\n");
console.log("insert(2)");
console.log(list.insert(2, 80));
list.print();
