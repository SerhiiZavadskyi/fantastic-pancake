// Maximum Product of Two Elements in an Array

// more efficient
function maxProduct(nums: number[]): number {
	const copy = [...nums];
	const max = copy.splice(copy.indexOf(Math.max(...copy)), 1)[0];

	return (max - 1) * (Math.max(...copy) - 1);
}

function maxProduct2(nums: number[]): number {
	let max1 = Number.MIN_SAFE_INTEGER;
	let max2 = Number.MIN_SAFE_INTEGER;

	for (const num of nums) {
		if (num > max1) {
			max2 = max1;
			max1 = num;
		} else if (num > max2) {
			max2 = num;
		}
	}

	return (max1 - 1) * (max2 - 1);
}

//  using sorting
function maxProduct1(nums: number[]): number {
	const sortedNums = [...nums].sort((a, b) => b - a);

	return (sortedNums[0] - 1) * (sortedNums[1] - 1);
}
const arr = [1, 5, 4, 5];
console.log(maxProduct(arr));
