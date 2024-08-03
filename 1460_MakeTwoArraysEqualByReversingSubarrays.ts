function canBeEqual(target: number[], arr: number[]): boolean {
	target.sort()
	arr.sort()

	return target.every((n, i) => n === arr[i])
}

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]))
