function smallestNumber(pattern: string): string {
	const result: number[] = [];
	const stack: number[] = [];

	for (let i = 0; i < pattern.length + 1; i++) {
		stack.push(i + 1);

		while (stack.length && (i === pattern.length || pattern[i] === "I")) {
			result.push(stack.pop()!);
		}
	}

	return result.join("");
}

console.log(smallestNumber("IIIDIDDD"));
