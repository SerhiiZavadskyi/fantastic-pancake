function intToRoman(num: number): string {
	const symbols: Record<string, string> = {
		"1": "I",
		"4": "IV",
		"5": "V",
		"9": "IX",
		"10": "X",
		"40": "XL",
		"50": "L",
		"90": "XC",
		"100": "C",
		"400": "CD",
		"500": "D",
		"900": "CM",
		"1000": "M",
	};
	const keys = Object.keys(symbols);
	let res = "";

	while (num > 0) {
		for (let i = keys.length - 1; i >= 0; i--) {
			const quantity = Math.floor(num / +keys[i]);
			res += symbols[keys[i]].repeat(quantity);
			num = num % +keys[i];
		}
	}

	return res;
}
333; // CCCXXXIII

console.log(intToRoman(333));
