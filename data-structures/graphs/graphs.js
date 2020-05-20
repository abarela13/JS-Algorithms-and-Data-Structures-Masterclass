/*
	https://cs.slides.com/colt_steele/graphs

    Complexity: https://cs.slides.com/colt_steele/graphs#/29
    
    Scenerio - Social Networks | Location / Mapping | Routing algorithms | visual hierarchy | file system optimizations | recommendation engines
 */

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	swap(arr, idx1, idx2) {
		if (idx1 !== idx2) [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2) {
		this.addVertex(vertex1);
		this.addVertex(vertex2);

		if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push(vertex2);
		if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)) {
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
			/* 
			this.swap(this.adjacencyList[vertex1], this.adjacencyList[vertex1].indexOf(vertex2), this.adjacencyList[vertex1].length - 1);
            this.swap(this.adjacencyList[vertex2], this.adjacencyList[vertex2].indexOf(vertex1), this.adjacencyList[vertex2].length - 1);
            
			this.adjacencyList[vertex1].pop();
			this.adjacencyList[vertex2].pop();
             */
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

	// The function should accept a starting node
	DFSRecursive(start) {
		// Create a list to store the end result, to be returned at the very end
		const result = [];
		// Create an object to store visited vertices
		const visited = {};
		const adjacencyList = this.adjacencyList;

		// Create a helper function which accepts a vertex
		(function dfs(vertex) {
			// The helper function should return early if the vertex is empty
			if (!vertex) return null;

			// Place accepted vertex into the visited object AND push that vertex into the result array
			visited[vertex] = true;
			result.push(vertex);

			// Loop over all of the values in the adjacencyList for that vertex
			adjacencyList[vertex].forEach((neighbor) => {
				// If any of those values have not been visited, recursively invoke the helper function with that vertex
				if (!visited[neighbor]) return dfs(neighbor);
			});
		})(start); // Invoke the helper function with the starting vertex

		// Return the result array
		return result;
	}

	// The function should accept a starting node
	DFSIterative(start) {
		// Create a list to store the end result, to be returned at the very end
		const result = [];
		// Create an object to store visited vertices
		const visited = {};
		// Create a stack to help use keep track of vertices (use a list/array)
		const stack = new Stack();
		let currentVertex;

		// Add the starting vertex to the stack, and mark it visited
		stack.push(start);
		visited[start] = true;

		// While the stack has something in it:
		while (stack.size > 0) {
			// Pop the next vertex from the stack
			currentVertex = stack.pop();
			// Add it to the result list
			result.push(currentVertex);

			// Loop over all of the values in the adjacencyList for that vertex
			this.adjacencyList[currentVertex].forEach((neighbor) => {
				// If that vertex hasn't been visited yet:
				if (!visited[neighbor]) {
					// ​Mark it as visited
					visited[neighbor] = true;
					// Push all of its neighbors into the stack
					stack.push(neighbor);
				}
			});
		}

		// Return the result array
		return result;
	}

	// This function should accept a starting vertex
	breadthFirst(start) {
		// Create an array to store the nodes visited
		const result = [];
		// Create an object to store nodes visited
		const visited = {};
		// Create a queue(you can use an array)
		const queue = new Queue();
		let currentVertex;

		// Place the starting vertex in queue
		queue.enqueue(start);

		// Mark the starting vertex as visited
		visited[start] = true;

		// Loop as long as there is anything in the queue
		while (queue.size > 0) {
			currentVertex = queue.dequeue();

			// Remove the first vertex from the queue and push it into the array that stores nodes visited
			result.push(currentVertex);

			// Loop over each vertex in the adjacency list for the vertex you are visiting
			this.adjacencyList[currentVertex].forEach((neighbor) => {
				// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.enqueue(neighbor);
				}
			});
			/* 
			// Reverse child order
			this.adjacencyList[currentVertex].slice().reverse().forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.enqueue(neighbor);
				}
			});
			 */
		}
		// Once you have finished looping, return the array of visited nodes
		return result;
	}
}

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

const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);

// g.DFSIterative("A");
g.breadthFirst("A");
