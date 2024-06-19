function minDays(bloomDay: number[], m: number, k: number): number {
	if (m * k > bloomDay.length) {
		return -1
	}

	let start = 0,
		end = Math.max(...bloomDay),
		minDays = -1

	while (start <= end) {
		const mid = Math.floor((start + end) / 2)

		if (getNumBouquets(mid) >= m) {
			minDays = mid
			end = mid - 1
		} else {
			start = mid + 1
		}
	}

	function getNumBouquets(mid: number) {
		let res = 0,
			count = 0

		for (const day of bloomDay) {
			if (day <= mid) {
				count++
			} else {
				count = 0
			}

			if (count === k) {
				res++
				count = 0
			}
		}

		return res
	}

	return minDays
}
console.log(minDays([1, 10, 3, 10, 2], 3, 1))
