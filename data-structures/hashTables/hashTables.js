/*
	https://cs.slides.com/colt_steele/hash-tables

	Complexity:
	Insertion - O(1)
	Deletion - O(1)
	Access - O(1)

	Scenerio - 
 */

class HashTable {
	constructor(size = 3) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, val) {
		let idx = this._hash(key);

		if (!this.keyMap[idx]) this.keyMap[idx] = [];

		this.keyMap[idx].push([key, val]);

		return idx;
	}

	get(key) {
		let idx = this._hash(key);

		if (this.keyMap[idx]) {
			for (let i = 0; i < this.keyMap[idx].length; i++) {
				if (this.keyMap[idx][i][0] === key) return this.keyMap[idx][i][1];
			}
		}

		return undefined;
	}

	keys() {
		let keysArr = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keysArr.includes(this.keyMap[i][j][0])) keysArr.push(this.keyMap[i][j][0]);
				}
			}
		}

		return keysArr;
	}

	values() {
		let valuesArr = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1]);
				}
			}
		}

		return valuesArr;
	}
}

const hTable = new HashTable();
hTable.set("maroon", "#800000");
hTable.set("yellow", "#FFFF00");
hTable.set("olive", "#808000");
hTable.set("salmon", "#FA8072");
hTable.set("lightcoral", "#F08080");
hTable.set("mediumvioletred", "#C71585");
hTable.set("plum", "#DDA0DD");

hTable.get("olive");

let output = hTable.get("olive");
console.log(output);

output = hTable.values();
console.log(output);

output = hTable.keys();
console.log(output);
