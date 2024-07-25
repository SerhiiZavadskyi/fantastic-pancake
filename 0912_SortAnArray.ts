//Marge sort
function sortArray(nums: number[]): number[] {
	function merge(arr: number[], l: number, r: number, m: number) {
		const left = arr.slice(l, m + 1)
		const right = arr.slice(m + 1, r + 1)

		let i = l,
			j = 0,
			k = 0

		while (j < left.length && k < right.length) {
			if (left[j] <= right[k]) {
				arr[i] = left[j]
				j++
			} else {
				arr[i] = right[k]
				k++
			}

			i++
		}

		while (j < left.length) {
			nums[i] = left[j]
			j++
			i++
		}

		while (k < right.length) {
			nums[i] = right[k]
			k++
			i++
		}
	}

	function mergeSort(arr: number[], l: number, r: number): number[] {
		if (l === r) {
			return arr
		}

		const m = Math.floor((r + l) / 2)

		mergeSort(arr, l, m)
		mergeSort(arr, m + 1, r)
		merge(arr, l, r, m)

		return arr
	}

	return mergeSort(nums, 0, nums.length - 1)
}

console.log(sortArray([5, -1, 1, 1, 2, 0, 0]))
