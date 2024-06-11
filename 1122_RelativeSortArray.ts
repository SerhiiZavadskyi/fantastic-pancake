function relativeSortArray(arr1: number[], arr2: number[]): number[] {
	const arr1Count = new Map()
	const arr2Set = new Set(arr2)
	const res: number[] = []
	const tail: number[] = []

	for (const n of arr1) {
		if (!arr2Set.has(n)) {
			tail.push(n)
		}
		arr1Count.set(n, (arr1Count.get(n) ?? 0) + 1)
	}

	for (const n of arr2) {
		for (let i = 0; i < arr1Count.get(n); i++) {
			res.push(n)
		}
	}

	tail.sort((a, b) => a - b)

	return res.concat(tail)
}

//counting sort
function relativeSortArray2(arr1: number[], arr2: number[]): number[] {
	const countLength = Math.max(...arr1, ...arr2) + 1
	const count = new Array(countLength).fill(0)
	const exist = new Set(arr2)
	const res: number[] = []

	for (const n of arr1) {
		count[n]++
	}

	for (const n of arr2) {
		for (let i = 0; i < count[n]; i++) {
			res.push(n)
		}
	}

	for (let i = 0; i < countLength; i++) {
		if (!exist.has(i)) {
			for (let j = 0; j < count[i]; j++) {
				res.push(i)
			}
		}
	}

	return res
}

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])) // [2,2,2,1,4,3,3,9,6,7,19]
