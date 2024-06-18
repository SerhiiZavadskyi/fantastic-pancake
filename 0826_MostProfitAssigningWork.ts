function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
	const arr: number[][] = []
	for (let i = 0; i < profit.length; i++) {
		arr.push([profit[i], difficulty[i]])
	}
	arr.sort((a, b) => b[0] - a[0])
	worker.sort((a, b) => b - a)

	let n = 0 //current index of worker array
	let m = 0 //current index of new array from profit and difficult
	let res = 0
	while (n < worker.length && m < profit.length) {
		if (worker[n] >= arr[m][1]) {
			res = res + arr[m][0]
			n++
		} else {
			m++
		}
	}

	return res
}

console.log(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]))
