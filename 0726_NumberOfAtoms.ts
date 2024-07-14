function countOfAtoms(formula: string): string {
	function isUpperCase(s: string) {
		return s >= "A" && s <= "Z"
	}

	function isLowerCase(s: string) {
		return s >= "a" && s <= "z"
	}

	function isDigit(s: string) {
		return s >= "0" && s <= "9"
	}
	const stack: [string, number][] = []
	let i = 0
	const len = formula.length

	while (i < len) {
		if (formula[i] === "(") {
			stack.push(["(", 0])
			i++
		} else if (formula[i] === ")") {
			i++
			let sec = "0"
			while (i < len && isDigit(formula[i])) {
				sec += formula[i]
				i++
			}
			let inte = parseInt(sec)
			inte = inte === 0 ? 1 : inte
			const stack2: [string, number][] = []
			while (stack[stack.length - 1][0] !== "(") {
				stack2.push(stack.pop()!)
			}
			stack.pop()
			while (stack2.length) {
				const [key, value] = stack2.pop()!
				stack.push([key, value * inte])
			}
		} else if (isUpperCase(formula[i])) {
			let sym = formula[i]
			i++
			while (i < len && isLowerCase(formula[i])) {
				sym += formula[i]
				i++
			}
			let sec = "0"
			while (i < len && isDigit(formula[i])) {
				sec += formula[i]
				i++
			}
			let inte = parseInt(sec)
			inte = inte === 0 ? 1 : inte
			stack.push([sym, inte])
		}
	}
	const map: Record<string, number> = {}
	const dummy: string[] = []
	while (stack.length) {
		const [key, value] = stack.pop()!
		if (!map[key]) {
			dummy.push(key)
		}
		map[key] = map[key] ? map[key] + value : value
	}
	dummy.sort((a, b) => b.localeCompare(a))
	let res = ""
	while (dummy.length) {
		const s = dummy.pop()!
		res += s
		if (map[s] !== 1) {
			res += map[s]
		}
	}
	return res
}

console.log(countOfAtoms("Mg(OH)2"))
