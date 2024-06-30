import { UnionFind } from "./helpers/UnionFind"

function canTraverseAllPairs(nums: number[]): boolean {
	const uf = new UnionFind(nums.length)

	const factorIndex = new Map()

	for (let i = 0; i < nums.length; i++) {
		let f = 2

		while (f * f <= nums[i]) {
			if (nums[i] % f === 0) {
				if (factorIndex.has(f)) {
					uf.union(i, factorIndex.get(f))
				} else {
					factorIndex.set(f, i)
				}

				while (nums[i] % f === 0) {
					nums[i] /= f
				}
			}

			f++
		}

		if (nums[i] > 1) {
			if (factorIndex.has(nums[i])) {
				uf.union(i, factorIndex.get(nums[i]))
			} else {
				factorIndex.set(nums[i], i)
			}
		}
	}

	return uf.getGroups() === 1
}

console.log(canTraverseAllPairs([3, 9, 5]))
