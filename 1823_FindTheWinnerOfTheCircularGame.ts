function findTheWinner(n: number, k: number): number {
	let res = 0

	for (let i = 1; i < n + 1; i++) {
		res = (res + k) % i
	}

	return res + 1

	function helper(n: number, k: number): number {
		if (n === 1) {
			return 0
		}

		return (helper(n - 1, k) + k) % n
	}

	return helper(n, k) + 1
}

function findTheWinner2(n: number, k: number): number {
	const friends = new Array(n).fill(1).map((n, i) => n + i)

	while (friends.length > 1) {
		for (let i = 0; i < k - 1; i++) {
			friends.push(friends.shift()!)
		}

		friends.shift()
	}

	return friends[0]
}

console.log(findTheWinner(5, 2))
