function isValid(s: string): boolean {
	const stack: string[] = [];
	const closeToOpen: Record<string, string> = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (const char of s) {
		if (char in closeToOpen) {
			if (stack.length && stack[stack.length - 1] === closeToOpen[char]) {
				stack.pop();
			} else {
				return false;
			}
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0;
}

console.log(isValid("()[]{}"));
