function getHappyString(n: number, k: number): string {
	const result: string[] = [];
	const stack: string[] = [];
	const chars = ["a", "b", "c"];

	function backtrack(): void {
		if (stack.length === n) {
			result.push(stack.join(""));
			return;
		}

		for (let i = 0; i < chars.length; i++) {
			if (stack.length && stack[stack.length - 1] === chars[i]) {
				continue;
			}

			stack.push(chars[i]);
			backtrack();
			stack.pop();
		}
	}

	backtrack();
	return result[k - 1] || "";
}

console.log(getHappyString(1, 3)); // "c"
console.log(getHappyString(1, 4)); // ""
console.log(getHappyString(3, 9)); // "cab"
