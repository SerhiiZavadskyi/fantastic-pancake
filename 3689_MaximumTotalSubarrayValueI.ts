function maxTotalValue(nums: number[], k: number): number {
	return k * (Math.max(...nums) - Math.min(...nums));
}

console.log(maxTotalValue([1, 3, 2], 2));
