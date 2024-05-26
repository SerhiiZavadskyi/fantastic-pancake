//Bellman-Ford Algorithm

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
	let prices = new Array(n).fill(Infinity);
	prices[src] = 0;

	for (let i = 0; i < k + 1; i++) {
		const tempPrices = [...prices];
		for (const [s, d, p] of flights) {
			if (prices[s] === Infinity) {
				continue;
			}

			if (prices[s] + p < tempPrices[d]) {
				tempPrices[d] = prices[s] + p;
			}
		}

		prices = tempPrices;
	}

	return prices[dst] === Infinity ? -1 : prices[dst];
}

console.log(
	findCheapestPrice(
		4,
		[
			[0, 1, 100],
			[1, 2, 100],
			[2, 0, 100],
			[1, 3, 600],
			[2, 3, 200],
		],
		0,
		3,
		1
	)
);
