function reverseParentheses(s: string): string {
	let stack: string[] = []

	for (const c of s) {
		if (c === ")") {
			const portion: string[] = []
			while (stack.at(-1) !== "(") {
				portion.push(stack.pop()!)
			}

			stack.pop()
			stack = stack.concat(portion)
		} else {
			stack.push(c)
		}
	}

	return stack.join("")
}
console.log(reverseParentheses("(u(love)i)"))
