function beautifulSubsets(nums: number[], k: number): number {
	const count = new Map()

	for (const n of nums) {
		count.set(n, (count.get(n) ?? 0) + 1)
	}

	const groups: Map<number, number>[] = []
	const visit = new Set()

	let res = 1
	const cache = new Map()

	const helper = (n: number, g: Map<number, number>): number => {
		if (!g.has(n)) {
			return 1
		}

		if (cache.has(n)) {
			return cache.get(n)
		}
		const skip = helper(n + k, g)

		const count = g.get(n)!

		const include = (2 ** count - 1) * helper(n + 2 * k, g)
		cache.set(n, skip + include)
		return skip + include
	}

	for (const [key] of count) {
		let n = key
		if (visit.has(n)) continue

		const group = new Map()

		while (count.has(n - k)) {
			n -= k
		}

		while (count.has(n)) {
			group.set(n, count.get(n))
			visit.add(n)
			n += k
		}
		groups.push(group)
	}

	for (const g of groups) {
		const n = Math.min(...g.keys())
		res *= helper(n, g)
	}

	return res - 1
}

console.log(beautifulSubsets([2, 4, 6], 2))
