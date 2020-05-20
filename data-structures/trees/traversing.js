/*
	https://cs.slides.com/colt_steele/trees

	Complexity:
	Insertion - O(log n)
	Removal - O()
	Searching - O(log n)
	Access - O()

	Binary Tree - Can have values of any type, but at most two children for each parent
	BST - every node to the left of a parent is less than it's value and every node to the right is greater
	BFS - JSON | HTML DOM | Network routing | AI (decision tree) |  OS file systems | Can take much more space
	DFS In Order - Used commonly with BST's, all nodes visited in their underlying (sort) order
	DFS Pre Order - Can be used to "export" a tree structure so that it is easily reconstructed or copied.
	DFS Post Order - Can be used to "export" a tree structure so that it is easily reconstructed or copied.
 */

class QueueNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
		this.frequency = null;
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

		const node = this.first;

		if (this.size === 1) {
			this.last = null;
			this.first = null;
		} else {
			this.first = this.first.next;
		}

		this.size--;

		return node;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(val) {
		var newNode = new TreeNode(val);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		var current = this.root;

		while (true) {
			if (val === current.val) {
				current.frequency = (current.frequency || 1) + 1;
				return this;
			}

			if (val < current.val) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	find(val) {
		if (this.root === null) return false;

		let current = this.root;

		while (true) {
			if (val === current.val) return current;

			if (val < current.val) {
				if (current.left === null) return false;
				current = current.left;
			} else {
				if (current.right === null) return false;
				current = current.right;
			}
		}
	}

	BFS() {
		// Create a queue and a variable to store the values of nodes visited
		const queue = new Queue();
		const visited = [];

		// Place the root node in the queue
		let node = this.root;
		queue.enqueue(node);

		// Loop as long as there is anything in the queue
		while (queue.size) {
			// Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
			node = queue.dequeue().val;
			visited.push(node.val);

			// If there is a left property on the node dequeued - add it to the queue
			if (node.left) queue.enqueue(node.left);

			// If there is a right property on the node dequeued - add it to the queue
			if (node.right) queue.enqueue(node.right);
		}
		// Return the variable that stores the values
		return visited;
	}

	DFSPreOrder(current = this.root) {
		// Create a variable to store the values of nodes visited
		const visited = [];

		// Write a helper function which accepts a node
		function traverse(node) {
			// Push the value of the node to the variable that stores the values
			visited.push(node.val);

			// If the node has a left property, call the helper function with the left property on the node
			if (node.left) traverse(node.left);

			// If the node has a right property, call the helper function with the right property on the node
			if (node.right) traverse(node.right);
		}

		// Invoke the helper function with the current variable
		traverse(current);

		// Return the array of values
		return visited;
	}

	DFSInOrder(current = this.root) {
		const visited = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			visited.push(node.val);
			if (node.right) traverse(node.right);
		}

		traverse(current);

		return visited;
	}

	DFSPostOrder(current = this.root) {
		const visited = [];

		function traverse(node) {
			node.left && traverse(node.left);
			node.right && traverse(node.right);
			visited.push(node.val);
		}

		traverse(current);

		return visited;
	}
}

const tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);

console.log("BFS |", tree.BFS()); // [10,6,15,3,8,20]
console.log("DFSPreOrder |", tree.DFSPreOrder()); // [10,6,3,8,15,20]
console.log("DFSInOrder |", tree.DFSInOrder()); // [3,6,8,10,15,20]
console.log("DFSPostOrder |", tree.DFSPostOrder()); // [3,8,6,20,15,10]
