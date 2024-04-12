function removeKdigits(num: string, k: number): string {
	const stack: number[] = []

	for (const n of num) {
		while (stack.length > 0 && k > 0 && stack[stack.length - 1] > +n) {
			stack.pop()
			k--
		}

		stack.push(Number(n))
	}

	while (k > 0) {
		stack.pop()
		k--
	}

	let res = Number(stack.join("")).toString()

	return res.length > 0 ? res : "0"
}

console.log(removeKdigits("10001", 4))
console.log(removeKdigits("1432219", 3))
