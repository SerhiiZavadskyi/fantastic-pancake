function leftRightDifference(nums: number[]): number[] {
	let leftSum = 0;
	let rightSum = nums.reduce((sum, curr) => sum + curr, 0);
	console.log(rightSum);

	nums.forEach((num, i) => {
		rightSum -= num;
		nums[i] = Math.abs(leftSum - rightSum);
		leftSum += num;
	});
	return nums;
}
console.log(leftRightDifference([10, 4, 8, 3]));
