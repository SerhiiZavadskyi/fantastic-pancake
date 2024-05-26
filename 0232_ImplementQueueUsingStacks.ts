class MyQueue {
	stack1: number[];
	stack2: number[];
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	push(x: number): void {
		this.stack1.push(x);
	}

	pop(): number {
		if (!this.stack2.length) {
			while (this.stack1.length) {
				this.stack2.push(this.stack1.pop());
			}
		}
		return this.stack2.pop();
	}

	peek(): number {
		if (!this.stack2.length) {
			while (this.stack1.length) {
				this.stack2.push(this.stack1.pop());
			}
		}
		return this.stack2[this.stack2.length - 1];
	}

	empty(): boolean {
		return Math.max(this.stack1.length, this.stack2.length) === 0;
	}
}
