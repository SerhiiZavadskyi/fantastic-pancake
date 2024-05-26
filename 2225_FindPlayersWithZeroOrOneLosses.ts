function findWinners(matches: number[][]): number[][] {
	const map = new Map();
	const res: number[][] = [[], []];
	const set = new Set<number>();

	for (const [w, l] of matches) {
		set.add(w);
		set.add(l);
		map.set(l, (map.get(l) || 0) + 1);
	}

	for (const [key, count] of map) {
		if (count === 1) {
			res[1].push(key);
		}
	}

	for (const num of set) {
		if (!map.has(num)) {
			res[0].push(num);
		}
	}

	res[0].sort((a, b) => a - b);
	res[1].sort((a, b) => a - b);

	return res;
}

function findWinners2(matches: number[][]): number[][] {
	const res: number[][] = [[], []];
	const stats = new Map();

	for (const [winner, loser] of matches) {
		const winnerStats = stats.get(winner) || { won: 0, lost: 0 };
		winnerStats.won += 1;
		stats.set(winner, winnerStats);

		const loserStats = stats.get(loser) || { won: 0, lost: 0 };
		loserStats.lost += 1;
		stats.set(loser, loserStats);
	}

	for (const [player, playerStats] of stats) {
		if (playerStats.lost === 0) {
			res[0].push(player);
		}

		if (playerStats.lost === 1) {
			res[1].push(player);
		}
	}

	res[0].sort((a, b) => a - b);
	res[1].sort((a, b) => a - b);

	return res;
}

function findWinners3(matches: number[][]): number[][] {
	const res: number[][] = [[], []];
	const stats = new Array(Math.pow(10, 5) + 1).fill(-1);

	// -1 - never played
	// 0 - only win
	// >=1 - n-matches lost

	for (const [winner, loser] of matches) {
		if (stats[winner] === -1) {
			stats[winner] = 0;
		}

		if (stats[loser] === -1) {
			stats[loser] = 1;
		} else {
			stats[loser] += 1;
		}
	}

	stats.forEach((stat, i) => {
		if (stat === 0) {
			res[0].push(i);
		} else if (stat === 1) {
			res[1].push(i);
		}
	});

	return res;
}

console.log(
	findWinners3([
		[2, 3],
		[1, 3],
		[5, 4],
		[6, 4],
	])
);
