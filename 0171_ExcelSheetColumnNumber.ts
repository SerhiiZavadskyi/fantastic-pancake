function titleToNumber(columnTitle: string): number {
	let res = 0

	for (let i = 0; i < columnTitle.length; i++) {
		res = 26 * res + (columnTitle[i].charCodeAt(0) - 64)
	}

	return res
}

function titleToNumber2(columnTitle: string): number {
	return columnTitle.split("").reduce((acc, curr) => acc * 26 + (curr.charCodeAt(0) - 64), 0)
}

console.log(titleToNumber2("ZY"))
