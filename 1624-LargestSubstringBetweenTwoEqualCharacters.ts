function maxLengthBetweenEqualCharacters(s: string): number {
	let res = -1;
	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], [...(map.get(s[i]) || []), i]);
	}

	for (const nums of map.values()) {
		res = Math.max(res, nums[nums.length - 1] - nums[0] - 1);
	}

	return res;
}

function maxLengthBetweenEqualCharacters2(s: string): number {
	let res = -1;

	for (let i = 0; i < s.length; i++) {
		for (let j = 1; j < s.length; j++) {
			if (s[i] === s[j]) {
				res = Math.max(res, j - i - 1);
			}
		}
	}

	return res;
}

function maxLengthBetweenEqualCharacters3(s: string): number {
	let res = -1;
	const map: Record<string, number> = {};

	for (let i = 0; i < s.length; i++) {
		if (s[i] in map) {
			res = Math.max(res, i - map[s[i]] - 1);
		} else {
			map[s[i]] = i;
		}
	}

	return res;
}

function maxLengthBetweenEqualCharacters4(s: string): number {
	let res = -1;

	for (let i = 0; i < s.length; i++) {
		const lastIdx = s.lastIndexOf(s[i]);

		if (i !== lastIdx) {
			res = Math.max(res, lastIdx - i - 1);
		}
	}

	return res;
}

console.log(maxLengthBetweenEqualCharacters3("qweq"));
