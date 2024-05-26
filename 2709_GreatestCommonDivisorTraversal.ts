class UnionFind {
	parents: Array<number>;
	rank: Array<number>;
	groups: number;

	constructor(n: number) {
		this.parents = new Array(n).fill(0).map((_, i) => i);
		this.rank = new Array(n).fill(1);
		this.groups = n;
	}

	union(a: number, b: number): void {
		const rootA = this.find(a);
		const rootB = this.find(b);

		if (rootA === rootB) {
			return;
		}

		// join smaller tree to larger tree
		if (this.rank[rootA] < this.rank[rootB]) {
			this.parents[rootA] = rootB;
			this.rank[rootB] += this.rank[rootA];
		} else {
			this.parents[rootB] = rootA;
			this.rank[rootA] += this.rank[rootB];
		}

		this.groups--;
	}

	find(a: number): number {
		let curr = a;
		let parent = this.parents[a];
		while (curr !== parent) {
			let tmp = curr;
			curr = parent;
			parent = this.parents[parent];
			this.parents[tmp] = parent;
		}
		return curr;
	}

	getGroups() {
		return this.groups;
	}
}

function canTraverseAllPairs(nums: number[]): boolean {
	const uf = new UnionFind(nums.length);

	const factorIndex = new Map();

	for (let i = 0; i < nums.length; i++) {
		let f = 2;

		while (f * f <= nums[i]) {
			if (nums[i] % f === 0) {
				if (factorIndex.has(f)) {
					uf.union(i, factorIndex.get(f));
				} else {
					factorIndex.set(f, i);
				}

				while (nums[i] % f === 0) {
					nums[i] /= f;
				}
			}

			f++;
		}

		if (nums[i] > 1) {
			if (factorIndex.has(nums[i])) {
				uf.union(i, factorIndex.get(nums[i]));
			} else {
				factorIndex.set(nums[i], i);
			}
		}
	}

	return uf.getGroups() === 1;
}

console.log(canTraverseAllPairs([3, 9, 5]));
