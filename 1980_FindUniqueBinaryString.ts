function findDifferentBinaryString(nums: string[]): string {
	const numsSet = new Set(nums);

	const backtracking = (curr: string): string | null => {
		if (curr.length === nums.length) {
			return numsSet.has(curr) ? null : curr;
		}

		let res = backtracking(curr + "0");
		if (res) return res;

		res = backtracking(curr + "1");
		if (res) return res;

		return null;
	};

	return backtracking("") || "";
}

console.log(findDifferentBinaryString(["01", "10"])); // "11"
//console.log(findDifferentBinaryString(["111", "011", "001"])); // "101"
