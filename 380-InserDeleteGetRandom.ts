class RandomizedSet2 {
	private arr: number[];
	private map: Map<number, number>;
	constructor() {
		this.map = new Map();
		this.arr = [];
	}

	insert(val: number): boolean {
		if (this.map.has(val)) {
			return false;
		}
		this.map.set(val, this.arr.length);
		this.arr.push(val);
		return true;
	}

	//O(1)
	remove(val: number): boolean {
		if (!this.map.has(val)) {
			return false;
		}
		const indexToRemove = this.map.get(val)!;
		const lastVal = this.arr[this.arr.length - 1];
		this.map.set(lastVal, indexToRemove);
		this.arr[indexToRemove] = lastVal;
		this.arr.pop();

		return this.map.delete(val);
	}

	//O(1)
	getRandom(): number {
		return this.arr[Math.floor(Math.random() * this.arr.length)];
	}
}

class RandomizedSet {
	private set: Set<number>;

	constructor() {
		this.set = new Set();
	}

	//O(1)
	insert(val: number): boolean {
		if (this.set.has(val)) {
			return false;
		}
		this.set.add(val);
		return true;
	}
	//O(1)
	remove(val: number): boolean {
		return this.set.delete(val);
	}
	//O(n)
	getRandom(): number {
		return [...this.set][Math.floor(Math.random() * this.set.size)];
	}
}

const obj = new RandomizedSet2();

console.log(obj.insert(1));
console.log(obj.insert(2));
console.log(obj.insert(3));
console.log(obj.insert(4));
console.log(obj.remove(2));
console.log(obj.getRandom());
