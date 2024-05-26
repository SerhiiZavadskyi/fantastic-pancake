function largestPerimeter(nums: number[]): number {
	while (nums.length > 0) {
		let largestSide = Math.max(...nums);
		let sum = nums.reduce((acc, curr) => acc + curr);

		if (largestSide < sum - largestSide) return sum;

		nums.splice(nums.indexOf(largestSide), 1);
	}

	return -1;
}

function largestPerimeterGreedyAlgo(nums: number[]): number {
	nums.sort((a, b) => a - b);
	let res = -1;
	let sum = 0;

	for (const n of nums) {
		if (sum > n) {
			res = sum + n;
		}

		sum += n;
	}
	return res;
}

console.log(largestPerimeterGreedyAlgo([1, 12, 1, 2, 5, 50, 3]));
console.log(largestPerimeterGreedyAlgo([5, 5, 5]));
