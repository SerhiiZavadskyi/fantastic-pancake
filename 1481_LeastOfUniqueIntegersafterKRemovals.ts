function findLeastNumOfUniqueInts(arr: number[], k: number): number {
	const count = new Map();

	arr.forEach((num) => count.set(num, (count.get(num) ?? 0) + 1));
	const frequencies = [...count.values()].sort((a, b) => b - a);
	let res = count.size;
	let i = 0;
	while (i < frequencies.length && k >= frequencies[i]) {
		k -= frequencies[i];
		res--;
		i++;
	}

	return res;
}

function findLeastNumOfUniqueInts2(arr: number[], k: number): number {
	const count = new Map();

	arr.forEach((num) => count.set(num, (count.get(num) ?? 0) + 1));
	const sortedCount = [...count.values()].sort((a, b) => b - a);
	let res = count.size;

	while (k > 0 && sortedCount.length) {
		const freq = sortedCount.pop();

		if (k >= freq) {
			k -= freq;
			res -= 1;
		}
	}

	return res;
}

function findLeastNumOfUniqueInts3(arr: number[], k: number): number {
	const count = new Map();
	arr.forEach((num) => count.set(num, (count.get(num) ?? 0) + 1));

	const freqList = new Array(arr.length + 1).fill(0);

	for (const [_, cnt] of count) {
		freqList[cnt] += 1;
	}

	let res = count.size;

	for (let i = 1; i < freqList.length; i++) {
		let remove = freqList[i];
		console.log(i * remove);

		if (k >= i * remove) {
			k -= i * remove;
			res -= remove;
		} else {
			remove = Math.floor(k / i);
			res -= remove;
			break;
		}
	}

	return res;
}

//console.log(findLeastNumOfUniqueInts2([5, 5, 4], 1));

function fibonacci(n: number): number {
	const dp: number[] = [];

	dp[0] = 0;
	dp[1] = 1;

	for (let i = 2; i < n + 1; i++) {
		dp[i] = dp[i - 2] + dp[i - 1];
	}

	return dp[n] % Number.MAX_SAFE_INTEGER;
}

export function getNumbers(
	numbers: number[],
	target: number,
	result: number[] = [],
	cache: { [key: number]: number[] } = {}
): number[] {
	if (cache[target]) return cache[target];
	if (!target) return result;
	if (target < 0) return [];

	for (let n of numbers) {
		const check = getNumbers(numbers, target - n, [...result, n], cache);
		cache[target - n] = check;
		if (check.length) return check;
	}

	return [];
}
