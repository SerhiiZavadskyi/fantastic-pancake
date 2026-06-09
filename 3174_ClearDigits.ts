function clearDigits(s: string): string {
	let res: string[] = [];

	for (let i = 0; i < s.length; i++) {
		if (isNaN(Number(s[i]))) {
			res.push(s[i]);
		} else {
			res.pop();
		}
	}

	return res.join("");
}

console.log(clearDigits("csss3"));
