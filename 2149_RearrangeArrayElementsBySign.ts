function rearrangeArray(nums: number[]): number[] {
	const positive: number[] = [];
	const negative: number[] = [];
	const result: number[] = [];

	for (const num of nums) {
		if (num < 0) {
			negative.push(num);
		} else {
			positive.push(num);
		}
	}

	for (let i = 0; i < nums.length / 2; i++) {
		result.push(positive[i]);
		result.push(negative[i]);
	}

	return result;
}

function rearrangeArray2(nums: number[]): number[] {
	let positiveIndex: number = 0;
	let negativeIndex: number = 1;
	const result: number[] = new Array(nums.length);

	for (const num of nums) {
		if (num > 0) {
			result[positiveIndex] = num;
			positiveIndex += 2;
		} else {
			result[negativeIndex] = num;
			negativeIndex += 2;
		}
	}

	return result;
}
console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
