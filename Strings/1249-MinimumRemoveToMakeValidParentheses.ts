function minRemoveToMakeValid(s: string): string {
	const stack: number[] = []
	const res: string[] = []

	for (const char of s) {
		if (char === "(") {
			stack.push(res.length)
			res.push(char)
		} else if (char === ")") {
			if (stack.length > 0) {
				stack.pop()
				res.push(char)
			}
		} else {
			res.push(char)
		}
	}

	for (const i of stack) {
		res[i] = ""
	}

	return res.join("")
}

function minRemoveToMakeValid2(s: string): string {
	let count = 0
	let currentRes = ""

	for (const char of s) {
		if (count > 0 && char === ")") {
			currentRes += char
			count--
		} else if (char === "(") {
			currentRes += char
			count++
		} else if (char !== ")") {
			currentRes += char
		}
	}

	let result = ""
	for (let i = currentRes.length - 1; i >= 0; i--) {
		if (count > 0 && currentRes[i] === "(") {
			count--
		} else {
			result = currentRes[i] + result
		}
	}

	return result
}

console.log(minRemoveToMakeValid("(a(b(c)d)"))
console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
