export class UnionFind {
	parents: Array<number>
	rank: Array<number>
	groups: number

	constructor(n: number) {
		this.parents = new Array(n).fill(0).map((_, i) => i)
		this.rank = new Array(n).fill(1)
		this.groups = n
	}

	union(a: number, b: number): number | undefined {
		const rootA = this.find(a)
		const rootB = this.find(b)

		if (rootA === rootB) {
			return
		}

		// join smaller tree to larger tree
		if (this.rank[rootA] < this.rank[rootB]) {
			this.parents[rootA] = rootB
			this.rank[rootB] += this.rank[rootA]
		} else {
			this.parents[rootB] = rootA
			this.rank[rootA] += this.rank[rootB]
		}

		this.groups--

		return 1
	}

	find(a: number): number {
		let curr = a
		let parent = this.parents[a]
		while (curr !== parent) {
			let tmp = curr
			curr = parent
			parent = this.parents[parent]
			this.parents[tmp] = parent
		}
		return curr
	}

	getGroups() {
		return this.groups
	}

	isConnected(): boolean {
		return this.groups === 1
	}
}
