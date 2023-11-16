function search(nums: number[], target: number): number {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		const m = Math.floor((l + r) / 2);

		if (nums[m] > target) {
			r = m - 1;
		} else if (nums[m] < target) {
			l = m + 1;
		} else {
			return m;
		}
	}

	return -1;
}
//console.log(search([-2, -1, 0, 3, 5, 6, 8, 9], 5));

function binarySearch(nums: number[], target: number): number {
	let l = 0;
	let r = nums.length;

	while (l < r) {
		const mid = Math.floor((l + r) / 2);

		if (nums[mid] >= target) {
			r = mid;
		} else {
			l = mid + 1;
		}
		console.log(l, r);
	}

	return l;
}
console.log(binarySearch([-2, -1, 0, 3, 5, 6, 8, 9], 0));

function binarySearchRecursion(nums: number[], target: number): number {
	function binary(target: number, left: number, right: number): number {
		if (left > right) return -1;

		let mid: number = Math.floor((right + left) / 2);

		if (nums[mid] === target) return mid;

		if (nums[mid] > target) {
			return binary(target, left, mid - 1);
		} else {
			return binary(target, mid + 1, right);
		}
	}

	return binary(target, 0, nums.length - 1);
}

//console.log(binarySearchRecursion([-2, -1, 0, 3, 5, 6, 8, 9], 5));
