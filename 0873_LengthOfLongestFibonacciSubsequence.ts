function lenLongestFibSubseq(arr: number[]): number {
	const set = new Set(arr);
	let res = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let prev = arr[i];
			let curr = arr[j];
			let next = prev + curr;
			let len = 2;

			while (set.has(next)) {
				len++;
				prev = curr;
				curr = next;
				next = curr + prev;
				res = Math.max(res, len);
			}
		}
	}

	return res;
}

function lenLongestFibSubseq2(arr: number[]): number {
	const set = new Set(arr);
	let res = 0;
	const dp = new Array(arr.length).fill(0).map((n, i) => n + i);
	console.log(dp);

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let prev = arr[i];
			let curr = arr[j];
			let next = prev + curr;
			let len = 2;

			if (set.has(next)) {
				len = 1 + dp[j];
				res = Math.max(res, len);
			}
		}
	}

	return res;
}

console.log(lenLongestFibSubseq2([1, 2, 3, 4, 5, 6, 7, 8]));
