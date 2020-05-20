/*
	https://cs.slides.com/colt_steele/singly-linked-lists

	Complexity:
	Insertion - O(1)
	Removal - It depends.... O(1) or O(N)
	Searching - O(N)
	Access - O(N)

	Scenerio - when insertion and deletion at the beginning are frequently required, won't need random access (index)
 */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	// Insert after Tail
	push(val) {
		var newNode = new Node(val);

		// Edge Case | Empty List
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			// Move tail marker to the newly created node
			this.tail = newNode;
		}

		this.length++;

		return this;
	}
	// Remove Tail
	pop() {
		if (!this.head) return undefined;

		var current = this.head;
		var newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}
	// Remove Head
	shift() {
		if (!this.head) return undefined;

		var oldHead = this.head;
		this.head = oldHead.next;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return oldHead;
	}
	// Insert as new Head
	unshift(val) {
		var newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}
	// Similar to array index
	get(index) {
		if (index < 0 || index >= this.length) return undefined;

		var counter = 0;
		var current = this.head;

		while (counter !== index) {
			current = current.next;
			counter++;
		}

		return current;
	}

	set(index, val) {
		var foundNode = this.get(index);

		if (foundNode) {
			foundNode.val = val;
			return true;
		}

		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		var newNode = new Node(val);
		var before = this.get(index - 1);
		var after = before.next;

		before.next = newNode;
		newNode.next = after;
		this.length++;

		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		var previousNode = this.get(index - 1);
		var removed = previousNode.next;

		previousNode.next = removed.next;
		this.length--;

		return removed;
	}

	reverse() {
		var node = this.head;
		var prev = null;
		var next;

		this.head = this.tail;
		this.tail = node;

		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		return this;
	}

	print() {
		var arr = [];
		var current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

var list = new SinglyLinkedList();

// Push examples
list.push(100);
console.log(list);
list.print();

list.push(201);
console.log("\n");
console.log(list);
list.print();

list.push(250);
list.push(555);
list.push(333);
list.push(350);
console.log("\n");
console.log(list);
list.print();

list.shift();
console.log("\n");
console.log(list);
list.print();

list.unshift(555);
console.log("\n");
console.log(list);

list.print();
list.reverse();
list.print();
