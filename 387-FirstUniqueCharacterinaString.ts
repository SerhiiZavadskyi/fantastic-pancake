function firstUniqChar(s: string): number {
	const map = new Map();

	for (const char of s) {
		map.set(char, (map.get(char) ?? 0) + 1);
	}

	for (const [key, count] of map) {
		if (count === 1) {
			return s.indexOf(key);
		}
	}
	return -1;
}

function firstUniqChar2(s: string): number {
	const count = new Array(26).fill(0);

	for (const char of s) {
		count[char.charCodeAt(0) - 97] += 1;
	}

	for (let i = 0; i < s.length; i++) {
		if (count[s[i].charCodeAt(0) - 97] === 1) return i;
	}

	return -1;
}

console.log(firstUniqChar2("loveleetcode"));
