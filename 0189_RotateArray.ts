function rotate(nums: number[], k: number): void {
	const newArray = new Array(nums.length);
	for (let i = 0; i < nums.length; i++) {
		if (i + k < nums.length) {
			newArray[i + k] = nums[i];
		} else {
			newArray[(i + k) % nums.length] = nums[i];
		}
	}

	for (let i = 0; i < nums.length; i++) {
		nums[i] = newArray[i];
	}
}

function rotate2(nums: number[], k: number): void {
	for (let i = 0; i < k; i++) {
		nums.unshift(nums.pop() || 0);
	}
}

function rotate3(nums: number[], k: number): void {
	k = k % nums.length;
	let l = 0;
	let r = nums.length - 1;

	while (l < r) {
		const temp = nums[l];
		nums[l] = nums[r];
		nums[r] = temp;

		l++;
		r--;
	}

	l = 0;
	r = k - 1;

	while (l < r) {
		const temp = nums[l];
		nums[l] = nums[r];
		nums[r] = temp;

		l++;
		r--;
	}

	l = k;
	r = nums.length - 1;

	while (l < r) {
		const temp = nums[l];
		nums[l] = nums[r];
		nums[r] = temp;

		l++;
		r--;
	}
}

rotate([1, 2, 3, 4, 5], 3);
