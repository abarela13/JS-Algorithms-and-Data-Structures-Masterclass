/*
	https://cs.slides.com/colt_steele/trees

	Complexity:
	Insertion - O(log n)
	Searching - O(log n)

	Scenerio - JSON | HTML DOM | Network routing | AI (decision tree) |  OS file systems
 */

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
		this.frequency = null;
	}
}

class binarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		var newNode = new Node(val);

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
}

const tree = new binarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(11);
tree.insert(5);
tree.insert(16);
tree.insert(7);

console.log(tree);

let output = document.getElementById("output");
output.innerHTML = JSON.stringify(tree);

console.log(tree.find(10));
console.log(tree.find(16));
console.log(tree.find(5));
console.log(tree.find(100));
