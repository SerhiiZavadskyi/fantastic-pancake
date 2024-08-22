function findComplement(num: number): number {
	return parseInt(
		Array.from(num.toString(2))
			.map((n) => (n === "1" ? "0" : "1"))
			.join(""),
		2
	)
}
function findComplement2(num: number): number {
	return parseInt(
		num.toString(2).replace(/[01]/g, (n) => `${1 - +n}`),
		2
	)
}
console.log(findComplement(5))
