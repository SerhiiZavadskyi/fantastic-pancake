function buyChocolate1(prices: number[], money: number): number {
	let min1 = Number.MAX_SAFE_INTEGER;
	let min2 = Number.MAX_SAFE_INTEGER;

	for (const p of prices) {
		if (min1 > p) {
			min2 = min1;
			min1 = p;
		} else if (min2 > p) {
			min2 = p;
		}
	}

	const rest = money - min1 - min2;

	return rest >= 0 ? rest : money;
}

function buyChocolate2(prices: number[], money: number): any {
	prices.sort((a, b) => a - b);
	const total = prices[0] + prices[1];

	return total <= money ? money - total : money;
}

console.log(buyChocolate2([1, 2, 2], 3));
console.log(buyChocolate2([3, 2, 3], 3));
console.log(buyChocolate2([98, 54, 6, 34, 66, 63, 52, 39], 62));
