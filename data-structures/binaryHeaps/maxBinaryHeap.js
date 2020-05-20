/*
	https://cs.slides.com/colt_steele/heaps

	Complexity:
	Insertion - O(log N)
	Removal - O(log N)
	Searching - O(N)
	Access - O()

	Scenerio - Priority Queues | Graph traversal

	At most two child nodes.
	The value of each parent node is always greater than its child nodes
	In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
	A binary heap is as compact as possible, children of each node are as full as they can be and left children are filled out first
 */

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	push(val) {
		// Push the value into the values property (array) on the heap
		this.values.push(val);

		// Bubble Up:
		this.bubbleUp();

		console.log(heap.values);
	}

	swap(idx1, idx2) {
		[this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
	}

	extractMax() {
		if (this.values.length === 0) return undefined;

		// Swap the first value in the values property with the last one
		this.swap(0, this.values.length - 1);

		let oldMax = this.values.pop();

		if (this.values.length > 1) {
			// Have the new root "sink down" to the correct spot...
			this.sinkDown();
		}

		// Return the old root!
		console.log("extractMax |", oldMax, "\n", this.values);
		return oldMax;
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

			if (el <= parent) break;

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
			// Find the index of the left child: 2 * index + 1(make sure its not out of bounds)
			const leftIdx = parentIdx * 2 + 1;
			// Find the index of the right child: 2 * index + 2(make sure its not out of bounds)
			const rightIdx = parentIdx * 2 + 2;

			// If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
			if ((rightIdx >= this.values.length || this.values[leftIdx] > this.values[rightIdx]) && this.values[leftIdx] > el) {
				this.swap(parentIdx, leftIdx);
				// The child index you swapped to now becomes the new parent index.
				parentIdx = leftIdx;
			} else if (this.values[rightIdx] > this.values[leftIdx] && this.values[rightIdx] > el) {
				this.swap(parentIdx, rightIdx);
				parentIdx = rightIdx;
			} else {
				break;
			}
		}
	}
}

let heap = new MaxBinaryHeap();

heap.push(41);
heap.push(39);
heap.push(33);
heap.push(18);
heap.push(27);
heap.push(12);
heap.push(55);

heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();

heap.push(18);
heap.push(27);
