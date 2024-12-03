function addSpaces(s: string, spaces: number[]): string {
	let res = "";
	const spacesSet = new Set(spaces);

	for (let i = 0; i < s.length; i++) {
		if (spacesSet.has(i)) {
			res += " ";
		}
		res += s[i];
	}

	return res;
}
console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
