/*
	https://cs.slides.com/colt_steele/doubly-linked-lists

	Complexity:
	Insertion - O(1)
	Removal - O(1)
	Searching - O(N)
	Access - O(N)

	Scenerio - Managing function invocations (call stack) | Undo/Redo | Routing (browser history)
 */

class StackNode {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new StackNode(val);

		if (this.size === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const oldTop = this.top;

			this.top = newNode;
			this.top.next = oldTop;
		}

		return ++this.size;
	}

	pop() {
		if (this.size === 0) return null;

		const temp = this.top;

		if (this.top === this.bottom) {
			this.bottom = null;
		}

		this.top = this.top.next;
		this.size--;

		return temp.value;
	}
}

const stack = new Stack();

stack.push("bottom");
stack.push("2nd from bottom");
stack.push("middle");
stack.push("2nd from top");
stack.push("top");
console.log(stack);
/* 
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
 */
