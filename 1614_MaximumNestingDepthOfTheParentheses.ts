function maxDepth(s: string): number {
	let res = 0
	const stack: string[] = []

	for (const char of s) {
		if (char === "(") stack.push(char)
		if (char === ")") stack.pop()

		res = Math.max(res, stack.length)
	}

	return res
}

function maxDepth2(s: string): number {
	let res = 0,
		count = 0

	for (const char of s) {
		if (char === "(") count++
		if (char === ")") count--

		res = Math.max(res, count)
	}

	return res
}
console.log(maxDepth2("(1+(2*3)+((8)/4))+1"))
