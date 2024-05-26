function subsets(nums: number[]): number[][] {
	const res: number[][] = []
	const subset: number[] = []

	const dfs = (i: number): void => {
		if (i === nums.length) {
			res.push([...subset])
			return
		}

		subset.push(nums[i])
		dfs(i + 1)

		subset.pop()
		dfs(i + 1)
	}
	dfs(0)
	return res
}

function subsets2(nums: number[]): number[][] {
	let res: number[][] = [[]]
	for (let num of nums) {
		const newSubsets: number[][] = []
		for (let curr of res) {
			newSubsets.push([...curr, num])
		}
		res = [...res, ...newSubsets]
	}
	return res
}

console.log(subsets([1, 2, 3]))
