function findMatrix(nums: number[]): number[][] {
	const map: Record<number, number> = {};
	let res: number[][] = [];

	for (const num of nums) {
		if (num in map) {
			map[num]++;
		} else {
			map[num] = 0;
		}

		if (res[map[num]]) {
			res[map[num]].push(num);
		} else {
			res[map[num]] = [num];
		}
	}

	return res;
}

function findMatrix2(nums: number[]): number[][] {
	const map: Record<number, number> = {};
	let res: number[][] = [];

	for (const num of nums) {
		map[num] = (map[num] || 0) + 1;
		const row = map[num] - 1;
		res[row] = res[row] ? [...res[row], num] : [num];
	}

	return res;
}

function findMatrix3(nums: number[]): number[][] {
	const res: number[][] = [[]];

	nums.forEach((num: number) => {
		let i = 0;

		while (res[i].includes(num)) {
			if (!res[i + 1]) res.push([]);
			i += 1;
		}

		res[i].push(num);
	});

	return res;
}

console.log(findMatrix2([1, 3, 4, 1, 2, 3, 1]));
