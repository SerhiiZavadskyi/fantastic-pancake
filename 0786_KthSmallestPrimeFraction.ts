function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
	let res: number[] = []
	let l = 0,
		r = 1

	while (l <= r) {
		let mid = l + (r - l) / 2
		let j = 1,
			total = 0,
			num = 0,
			den = 0
		let maxFrac = 0
		const n = arr.length
		for (let i = 0; i < n; i++) {
			while (j < n && arr[i] > arr[j] * mid) {
				j++
			}
			total += n - j
			if (j < n && maxFrac < arr[i] / arr[j]) {
				maxFrac = arr[i] / arr[j]
				num = i
				den = j
			}
		}
		if (total === k) {
			return [arr[num], arr[den]]
		}
		if (total > k) {
			r = mid
		} else {
			l = mid
		}
	}
	return res
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 2))
