function groupAnagrams(strs: string[]): string[][] {
	const sortString = (s: string) => s.split("").sort().join("");
	const map = new Map(); /// [anagram]: anagram[]

	for (const str of strs) {
		const key = sortString(str);

		if (map.has(key)) {
			map.get(key).push(str);
			continue;
		} else {
			map.set(key, [str]);
		}
	}
	return Array.from(map.values());
}

function groupAnagrams2(strs: string[]): string[][] {
	const map = new Map(); /// [anagram]: anagram[]

	for (const str of strs) {
		let sum = 0;
		let multi = 1;
		for (let i = 0; i < str.length; i++) {
			const code = str.charCodeAt(i) - 43;
			sum += code;
			multi *= code;
		}
		const key = multi + sum;

		if (map.has(key)) {
			map.get(key).push(str);
			continue;
		} else {
			map.set(key, [str]);
		}
	}
	return Array.from(map.values());
}

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
