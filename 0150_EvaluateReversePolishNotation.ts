function evalRPN(tokens: string[]): number {
	const stack: number[] = [];

	for (const c of tokens) {
		if (c === "+") {
			const a = stack.pop() || 0;
			const b = stack.pop() || 0;
			stack.push(a + b);
		} else if (c === "-") {
			const a = stack.pop() || 0;
			const b = stack.pop() || 0;

			stack.push(b - a);
		} else if (c === "/") {
			const a = stack.pop() || 0;
			const b = stack.pop() || 0;
			console.log(Math.round(b / a));

			stack.push(Math.round(b / a));
		} else if (c === "*") {
			const a = stack.pop() || 0;
			const b = stack.pop() || 0;

			stack.push(a * b);
		} else {
			stack.push(+c);
		}
	}

	return stack[0];
}

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
