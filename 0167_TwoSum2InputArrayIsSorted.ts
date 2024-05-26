function twoSum(numbers: number[], target: number): number[] {
	const map = new Map();

	for (let i = 0; i < numbers.length; i++) {
		const diff = target - numbers[i];

		if (map.has(diff)) return [map.get(diff), i];

		map.set(numbers[i], i);
	}
	return [];
}

function twoSum2(numbers: number[], target: number): number[] {
	let [l, r] = [0, numbers.length - 1];

	while (l < r) {
		const sum = numbers[l] + numbers[r];
		if (sum === target) return [l + 1, r + 1];
		else if (sum < target) l++;
		else r--;
	}
	return [];
}

function twoSum3(numbers: number[], target: number): number[] {
	let [l, r] = [0, numbers.length - 1];

	while (l < r) {
		const sum = numbers[l] + numbers[r];
		const mid = Math.floor((l + r) / 2);

		if (sum === target) return [l + 1, r + 1];
		else if (sum < target) l++;
		else r--;
	}
	return [];
}

console.log(twoSum2([2, 7, 11, 15], 9));
