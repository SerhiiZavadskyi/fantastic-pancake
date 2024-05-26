function minCost(colors: string, neededTime: number[]): number {
	let result = 0;
	let l = 0;

	for (let r = 1; r < colors.length; r++) {
		if (colors[l] === colors[r]) {
			if (neededTime[l] < neededTime[r]) {
				result += neededTime[l];
				l = r;
			} else {
				result += neededTime[r];
			}
		} else {
			l = r;
		}
	}

	return result;
}

console.log(
	minCost("aaaaaaaaaaaaaa", [1, 3, 6, 5, 4, 5, 4, 4, 2, 8, 3, 10, 6, 6])
);
