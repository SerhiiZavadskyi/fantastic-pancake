function customSortString(order: string, s: string): string {
	const orderMap = new Map()
	const map = new Map<number, string[]>()
	let res = ""

	for (let i = 0; i < order.length; i++) {
		orderMap.set(order[i], i)
	}

	for (const char of s) {
		const idx = orderMap.get(char)

		if (idx === undefined) {
			res += char
			continue
		}

		if (!map.has(idx)) {
			map.set(idx, [])
		}

		map.get(idx)?.push(char)
	}

	for (let i = 0; i < map.size; i++) {
		res += map.get(i)?.join("")
	}

	return res
}

function customSortString2(order: string, s: string): string {
	const map = new Map<number, string[]>()
	let res = ""

	for (const char of s) {
		const idx = order.indexOf(char)

		if (idx === -1) {
			res += char
			continue
		}

		if (!map.has(idx)) {
			map.set(idx, [])
		}

		map.get(idx)?.push(char)
	}

	for (let i = 0; i < map.size; i++) {
		res += map.get(i)?.join("")
	}

	return res
}

function customSortString3(order: string, s: string): string {
	return s
		.split("")
		.sort((a, b) => order.indexOf(a) - order.indexOf(b))
		.join("")
}

console.log(customSortString3("cba", "aabcccfg"))
console.log(customSortString3("kqep", "pekeq"))
