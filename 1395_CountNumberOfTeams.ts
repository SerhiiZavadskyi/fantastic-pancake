function numTeams(rating: number[]): number {
	let res = 0
	const len = rating.length

	for (let i = 1; i < len - 1; i++) {
		let leftSmaller = 0
		let rightLarger = 0

		for (let j = 0; j < i; j++) {
			if (rating[j] < rating[i]) leftSmaller++
		}

		for (let j = i + 1; j < len; j++) {
			if (rating[j] > rating[i]) rightLarger++
		}
		res += leftSmaller * rightLarger

		const leftLarger = i - leftSmaller
		const rightSmaller = len - i - 1 - rightLarger

		res += leftLarger * rightSmaller
	}

	return res
}

//brute force
function numTeams2(rating: number[]): number {
	let res = 0
	const len = rating.length

	for (let i = 0; i < len; i++) {
		for (let j = i; j < len; j++) {
			for (let k = j; k < len; k++) {
				if (rating[i] < rating[j] && rating[j] < rating[k]) {
					res++
				}

				if (rating[i] > rating[j] && rating[j] > rating[k]) {
					res++
				}
			}
		}
	}

	return res
}
console.log(numTeams([2, 5, 3, 4, 1]))
