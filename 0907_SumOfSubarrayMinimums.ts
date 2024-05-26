function sumSubarrayMins(arr: number[]): number {
	const MOD = 10 ** 9 + 7;
	let res = 0;

	let lm = leftMin(arr);
	let rm = rightMin(arr);

	function leftMin(nums: number[]) {
		let stack: number[] = [];
		let ans = Array(nums.length).fill(-1);
		for (let i = 0; i < nums.length; i++) {
			while (!isEmpty(stack) && nums[peek(stack)] >= nums[i]) stack.pop();
			if (!isEmpty(stack)) ans[i] = peek(stack);
			stack.push(i);
		}
		return ans;
	}
	function rightMin(nums: number[]) {
		let stack: number[] = [];
		let ans = Array(nums.length).fill(nums.length);
		for (let i = nums.length - 1; i >= 0; i--) {
			while (!isEmpty(stack) && nums[peek(stack)] > nums[i]) stack.pop();
			if (!isEmpty(stack)) ans[i] = peek(stack);
			stack.push(i);
		}
		return ans;
	}
	function peek(stack: number[]) {
		return stack[stack.length - 1];
	}
	function isEmpty(stack: number[]) {
		return stack.length === 0;
	}

	for (let i = 0; i < arr.length; i++) {
		let p1 = lm[i];
		let p2 = rm[i];
		res = (res + (i - p1) * (p2 - i) * arr[i]) % MOD;
	}

	return res % MOD;
}

function sumSubarrayMinsBrut(arr: number[]): number {
	const MOD = 10 ** 9 + 7;
	arr = [0, ...arr];
	const stack: number[] = [0];
	const result: number[] = new Array(arr.length).fill(0);

	for (let i = 0; i < arr.length; i++) {
		while (arr[stack[stack.length - 1]] > arr[i]) {
			const j = stack.pop() as number;
			result[i] = result[j] + (i - j) * arr[i];
		}
		const j = stack[stack.length - 1];
		result[i] = result[j] + (i - j) * arr[i];
		stack.push(i);
	}

	return result.reduce((sum, val) => (sum + val) % MOD, 0);
}

console.log(sumSubarrayMins([3, 1, 2, 4]));
