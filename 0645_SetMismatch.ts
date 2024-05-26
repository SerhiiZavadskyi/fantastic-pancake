function findErrorNums(nums: number[]): number[] {
	const map = new Map();
	let res = [0, 0];

	for (const n of nums) {
		map.set(n, (map.get(n) || 0) + 1);
	}

	for (let i = 1; i < nums.length + 1; i++) {
		if (!map.get(i)) {
			res[1] = i;
		}

		if (map.get(i) === 2) {
			res[0] = i;
		}
	}

	return res;
}

function findErrorNums2(nums: number[]): number[] {
	const count = new Array(nums.length).fill(0);

	for (const n of nums) {
		count[n - 1]++;
	}

	let [x, y] = [0, 0];

	for (let i = 1; i < count.length + 1; i++) {
		if (count[i] === 2) {
			x = i;
		}
		if (count[i] === 0) {
			y = i;
		}
	}

	return [x, y];
}

function _findErrorNums2(nums: number[]): number[] {
	const count = new Array(nums.length + 1).fill(0);

	for (const n of nums) {
		count[n]++;
	}

	return [count.indexOf(2), count.lastIndexOf(0)];
}

function findErrorNums3(nums: number[]): number[] {
	let res = [0, 0];

	for (let n of nums) {
		n = Math.abs(n);
		nums[n - 1] = -nums[n - 1];
		if (nums[n - 1] > 0) res[0] = n;
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0 && i + 1 !== res[0]) res[1] = i + 1;
	}

	return res;
}

//Math approach
function findErrorNums4(nums: number[]): number[] {
	let x = 0;
	let y = 0;

	for (let i = 1; i < nums.length + 1; i++) {
		x += nums[i - 1] - i;
		y += nums[i - 1] ** 2 - i ** 2;
	}

	const missing = (y - x ** 2) / (2 * x);
	const duplicate = missing + x;

	return [duplicate, missing];
}
console.log(findErrorNums4([2, 3, 4, 4, 5]));
// console.log(findErrorNums([1, 2, 4, 4]));
// console.log(findErrorNums([2, 2]));
