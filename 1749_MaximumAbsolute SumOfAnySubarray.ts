// function maxAbsoluteSum(nums: number[]): number {
// 	let max = 0;

// 	for (let i = 0; i < nums.length; i++) {
// 		let currSum = 0;

// 		for (let j = i; j < nums.length; j++) {
// 			currSum += nums[j];
// 			max = Math.max(max, Math.abs(currSum));
// 		}
// 	}

// 	return max;
// }

// console.log(maxAbsoluteSum([1, -3, 2, 3, -4]));

function maxAbsoluteSum(nums: number[]): number {
	let max = 0;
	let posSum = 0;
	let negSum = 0;

	for (const n of nums) {
		posSum = Math.max(posSum + n, 0);
		negSum = Math.max(negSum - n, 0);
		console.log(posSum, negSum);

		max = Math.max(max, posSum, negSum);
	}

	return max;
}

console.log(maxAbsoluteSum([1, -3, 2, 3, -4]));
