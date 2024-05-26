function shift(a: string, b: number): string {
	return String.fromCharCode(a.charCodeAt(0) + b);
}

function replaceDigits(s: string): string {
	const str = s.split("");

	for (let i = 1; i < s.length; i += 2) {
		str[i] = shift(s[i - 1], +s[i]);
	}

	return str.join("");
}

console.log(replaceDigits("a1b2c3d4e"));
