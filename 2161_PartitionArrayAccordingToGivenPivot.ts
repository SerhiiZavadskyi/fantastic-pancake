function pivotArray(nums: number[], pivot: number): number[] {
	const less: number[] = [];
	const greater: number[] = [];
	const pivots: number[] = [];

	for (const n of nums) {
		if (n < pivot) {
			less.push(n);
		} else if (n > pivot) {
			greater.push(n);
		} else {
			pivots.push(n);
		}
	}

	return [...less, ...pivots, ...greater];
}

function pivotArray2(nums: number[], pivot: number): number[] {
	const res = new Array(nums.length);
	let i = 0;
	let j = nums.length - 1;
	let i2 = 0;
	let j2 = nums.length - 1;

	while (i < nums.length) {
		if (nums[i] < pivot) {
			res[i2] = nums[i];
			i2++;
		}

		if (nums[j] > pivot) {
			res[j2] = nums[j];
			j2--;
		}
		i++;
		j--;
	}

	while (i2 <= j2) {
		res[i2] = pivot;
		res[j2] = pivot;
		i2++;
		j2--;
	}

	return res;
}

console.log(pivotArray2([-3, 4, 3, 2], 2));
