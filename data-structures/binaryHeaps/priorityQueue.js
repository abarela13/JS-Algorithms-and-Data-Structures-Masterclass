/*
	https://cs.slides.com/colt_steele/heaps

	Complexity:
	Insertion - O(log N)
	Removal - O(log N)
	Searching - O(N)
	Access - O()

	Scenerio - Priority Queues | Graph traversal

	At most two child nodes.
	The value of each parent node is always "greater" than its child nodes
	In a max Binary Heap the parent is "greater" than the children, but there are no guarantees between sibling nodes.
	A binary heap is as compact as possible, children of each node are as full as they can be and left children are filled out first
 */

class PriorityQueueNode {
	constructor(val, priority, index) {
		this.val = val;
		this.priority = priority;
		this.index = index;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
		this.nextIndex = 0;
	}

	enqueue(val, priority) {
		const newNode = new PriorityQueueNode(val, priority, this.nextIndex);

		this.nextIndex++;
		this.values.push(newNode);
		this.bubbleUp();
	}

	swap(idx1, idx2) {
		[this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
	}

	dequeue() {
		if (this.values.length === 0) return undefined;

		// Swap the first value in the values property with the last one
		this.swap(0, this.values.length - 1);

		let topPriority = this.values.pop();

		// console.log(`Next - ${topPriority.val} | Priority - ${topPriority.priority} | Index - ${topPriority.index}`);
		// console.log(`Processing - ${JSON.stringify(this.values)}`);

		if (this.values.length > 1) {
			// Have the new root "sink down" to the correct spot...
			this.sinkDown();
		}

		// Return the old root!
		console.log("extractTop |", topPriority);
		return topPriority;
	}

	parentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	bubbleUp() {
		// Create a variable called index which is the length of the values property - 1
		let idx = this.values.length - 1;
		const el = this.values[idx];

		// Keep looping as long as the values element at the parentIndex is less than the values element at the child index
		while (idx > 0) {
			// Create a variable called parentIndex which is the floor of(index - 1) / 2
			let parentIdx = this.parentIndex(idx);
			let parent = this.values[parentIdx];

			if (el.priority >= parent.priority) break;

			// Swap the value of the values element at the parentIndex with the value of the element property at the child index
			this.swap(idx, parentIdx);

			// Set the index to be the parentIndex, and start over!
			idx = parentIdx;
		}
	}

	sinkDown() {
		// Your parent index starts at 0(the root)
		let parentIdx = 0;
		const el = this.values[0];

		// Keep looping and swapping until neither child is larger than the element.
		while (true) {
			// Find the index of the children (make sure its not out of bounds)
			const leftIdx = parentIdx * 2 + 1;
			const rightIdx = parentIdx * 2 + 2;
			let leftNode, rightNode;

			if (leftIdx <= this.values.length) leftNode = this.values[leftIdx];
			if (rightIdx <= this.values.length) rightNode = this.values[rightIdx];

			if (rightNode === undefined && leftNode === undefined) {
				break;
			}

			if (rightNode === undefined && leftNode !== undefined) {
				if (leftNode.priority < el.priority) {
					this.swap(parentIdx, leftIdx);
					// The child index you swapped to now becomes the new parent index.
					parentIdx = leftIdx;
					break;
				}
				break;
			}

			if (leftNode.priority <= rightNode.priority && leftNode.priority < el.priority) {
				this.swap(parentIdx, leftIdx);
				// The child index you swapped to now becomes the new parent index.
				parentIdx = leftIdx;
			} else if (rightNode.priority < leftNode.priority && rightNode.priority < el.priority) {
				this.swap(parentIdx, rightIdx);
				parentIdx = rightIdx;
			} else {
				break;
			}
		}
	}
}

let waitingRoom = new PriorityQueue();

waitingRoom.enqueue("common cold", 5);
waitingRoom.enqueue("high fever", 3);
waitingRoom.enqueue("broken arm 1", 2);
waitingRoom.enqueue("glass in foot 1", 3);
waitingRoom.enqueue("gunshot wound", 1);
waitingRoom.enqueue("fever", 4);
waitingRoom.enqueue("broken arm 2", 2);
waitingRoom.enqueue("glass in foot 2", 3);
waitingRoom.enqueue("car accident", 1);

waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
waitingRoom.dequeue();
