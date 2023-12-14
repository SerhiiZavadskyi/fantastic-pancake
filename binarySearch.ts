function binarySearch(nums: number[], target: number): number {
	let left = -1;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor((right + left) / 2);

		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return -1;
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
