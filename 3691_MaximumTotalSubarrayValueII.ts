function maxTotalValue(nums: number[], k: number): number {
	for (let l = 1, r = ~0 >>> 2; ; ) {
		const mid = (l + r) >> 1;
		const { sum, count } = solve(nums, mid);
		if (r === l) return sum + (l - 1) * (k - count);
		if (count === k) return sum;
		if (count > k) l = mid + 1;
		else r = mid;
	}
}

type Node = {
	value: number;
	index: number;
	contribute: number;
};
class Mono {
	private values: Node[] = [];
	private _head = 0;
	sum = 0;
	rightIndex = 0;

	constructor(initValue: number) {
		this.values.push({ value: initValue, index: -1, contribute: 0 });
	}

	shouldPop(newVal: Node, oldVal: Node) {
		return oldVal.index < 0 ? oldVal.value < newVal.value : oldVal.value <= newVal.value;
	}

	get top() {
		return this.values.at(-1);
	}

	get head() {
		return this.values.at(this._head)!;
	}

	get headNext() {
		return this.values.at(this._head + 1);
	}

	update1(atLeast: number) {
		if (this.head.value < atLeast) return NaN;
		for (;;) {
			this.update2(this.head.index + 1);
			if (this.headNext != null && this.headNext.value >= atLeast) this._head++;
			else return this.rightIndex;
		}
	}

	update2(newRight: number) {
		if (isNaN(newRight)) return;
		if (newRight - 1 > this.head.index) this._head++;
		const d = newRight - this.rightIndex;
		const v = d * this.head.value;
		this.head.contribute += v;
		this.sum += v;
		this.rightIndex = newRight;
	}

	push(node: Node) {
		while (this.top != null && this.shouldPop(node, this.top)) {
			const popped = this.values.pop()!;
			this.sum -= popped.contribute;
		}
		this.values.push(node);
		const leftIndex = (this.values.at(-2)?.index ?? -1) + 1;
		const d = Math.max(0, this.rightIndex - leftIndex);
		node.contribute = d * node.value;
		this.sum += node.contribute;
		this._head = Math.min(this.values.length - 1, this._head);
	}
}

function solve(nums: number[] | ReadonlyArray<number>, dist: number) {
	const [upper, lower] = [new Mono(nums[0]), new Mono(-nums[0])];

	let [sum, count] = [0, 0];
	nums.forEach((value, index) => {
		upper.push({ value, index, contribute: 0 });
		lower.push({ value: -value, index, contribute: 0 });

		const last = nums[index - 1];
		if (last != null && last !== value) {
			const [a, b] = last < value ? [lower, upper] : [upper, lower];
			const r = a.update1(dist + a.top!.value);
			b.update2(r);
		}

		sum += upper.sum + lower.sum;
		count += upper.rightIndex;
	});
	return { sum, count };
}

console.log(maxTotalValue([1, 2, 3, 4, 5], 6488));
