function convertToBase7(num: number): string {
	return num.toString(7)
}

function convertToBase7_2(num: number): string {
	let result = ""

	const sign = Math.sign(num)
	num = Math.abs(num)

	while (num > 0) {
		result = (num % 7) + result
		num = Math.floor(num / 7)
	}

	return +result * sign + ""
}

console.log(convertToBase7_2(-7))
