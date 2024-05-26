class MinStack {
	stack: number[];
	private min: number;

	constructor() {
		this.stack = [];
		this.min = Number.MAX_SAFE_INTEGER;
	}

	push(val: number): void {
		this.stack.push(val);
		this.min = Math.min(this.min, val);
	}

	pop(): void {
		const popped = this.stack.pop();
		if (popped === this.min) {
			//this.min = Math.min(...this.stack);
			this.min = this.stack.reduce((acc, curr) => Math.min(acc, curr), Infinity);
		}
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		return this.min;
	}
}

var obj = new MinStack();
obj.push(2);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
