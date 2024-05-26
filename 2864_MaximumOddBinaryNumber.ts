function maximumOddBinaryNumber(s: string): string {
	let count = 0;
	for (const c of s) if (c === "1") count++;
	return "1".repeat(count - 1) + "0".repeat(s.length - count) + "1";
}

function maximumOddBinaryNumber2(s: string): string {
	const str = Array.from(s);
	let left = 0;

	for (let i = 0; i < s.length; i++) {
		if (str[i] === "1") {
			const temp = str[i];
			str[i] = str[left];
			str[left] = temp;
			left++;
		}
	}

	const tmp = str[left - 1];
	str[left - 1] = str[str.length - 1];
	str[str.length - 1] = tmp;
	console.log(str);

	return str.join("");
}

console.log(maximumOddBinaryNumber2("0010"));
