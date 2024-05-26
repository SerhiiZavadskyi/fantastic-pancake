function convertToTitle(columnNumber: number): string {
	let res = "",
		remainder: number

	while (columnNumber !== 0) {
		remainder = (columnNumber - 1) % 26
		console.log(remainder)

		res = String.fromCharCode(remainder + 65) + res
		columnNumber = Math.floor((columnNumber - 1) / 26)
	}

	return res
}

console.log(convertToTitle(701))
