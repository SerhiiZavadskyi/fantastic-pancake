function minimumCost(cost: number[]): number {
	cost.sort((a, b) => b - a);
	let minCost = 0;
	let curr = 0;

	for (let i = 0; i < cost.length; i++) {
		if (curr === 2) {
			curr = 0;
		} else {
			minCost += cost[i];
			curr++;
		}
	}

	return minCost;
}

console.log(minimumCost([3, 3, 3, 1]));
