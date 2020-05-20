/*
	https://cs.slides.com/colt_steele/graphs#/70

    Complexity: https://cs.slides.com/colt_steele/graphs#/29
    
    Scenerio - Social Networks | Location / Mapping | Routing algorithms | visual hierarchy | file system optimizations | recommendation engines
 */

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	swap(arr, idx1, idx2) {
		if (idx1 !== idx2) [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.addVertex(vertex1);
		this.addVertex(vertex2);

		if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push({ node: vertex2, weight });
		if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	removeEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)) {
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
		}
	}

	removeVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			this.adjacencyList[vertex].forEach((el) => {
				this.removeEdge(el, vertex);
			});

			delete this.adjacencyList[vertex];
		}
	}

	// This function should accept a starting and ending vertex
	shortestPath(start, finish) {
		// Create "distances" object and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
		const distances = {};

		// Create "previous" object and set each key to be every vertex in the adjacency list with a value of null
		const previous = {};
		const nodes = new PriorityQueue();

		// Path to return at the end
		let path = [];
		let frontNode;

		// Build initial state
		for (const vertex in this.adjacencyList) {
			// After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
			distances[start] = 0;
			nodes.enqueue(start, 0);
			
			if (vertex !== start) {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		// Start looping as long as there is anything in the priority queue
		while (nodes.values.length) {
			// Dequeue a vertex from the priority queue
			frontNode = nodes.dequeue().val;
			console.log("\n", "front of queue", frontNode);

			// If that vertex is the same as the ending vertex - we are done!
			if (frontNode === finish) {
				// Build Path to return
				while (previous[frontNode]) {
					path.push(frontNode);
					frontNode = previous[frontNode];
				}

				break;
			}

			if (frontNode || distances[frontNode] !== Infinity) {
				// Otherwise loop through each value in the adjacency list at that vertex
				for (let neighbor in this.adjacencyList[frontNode]) {
					// Find neighboring node
					let neighborNode = this.adjacencyList[frontNode][neighbor];
					console.log("Neighbor Node", neighborNode);
					// Calculate new distance to neighboring node
					let candidate = distances[frontNode] + neighborNode.weight;

					// update the distances object with new lower distance
					if (candidate < distances[neighborNode.node]) {
						// Updating new smallest distance to neighbor
						distances[neighborNode.node] = candidate;
						// Updating previous - how we got to neighbor
						previous[neighborNode.node] = frontNode;
						// Enqueue in priority queue the new priority
						nodes.enqueue(neighborNode.node, candidate);
					}
				}
			}
		}
		path = path.concat(frontNode).reverse();
		console.log(path);
		return path;
	}
}

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

	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}

	dequeue() {
		if (this.values.length === 0) return undefined;

		// Swap the first value in the values property with the last one
		this.swap(0, this.values.length - 1);

		let topPriority = this.values.pop();

		if (this.values.length > 1) {
			// Have the new root "sink down" to the correct spot...
			this.sinkDown();
		}

		// Return the old root!
		// console.log("extractTop |", topPriority);
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

const g = new WeightedGraph();
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g);

g.shortestPath("A", "E");
