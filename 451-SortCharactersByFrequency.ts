function frequencySort(s: string): string {
	const count = new Map();

	for (const char of s) {
		count.set(char, (count.get(char) ?? 0) + 1);
	}

	return [...count.entries()].sort((a, b) => b[1] - a[1]).reduce((acc, curr) => acc + curr[0].repeat(curr[1]), "");
}

function frequencySort2(s: string): string {
	const count = new Map<string, number>();
	const buckets = new Map<number, string[]>();

	for (const char of s) {
		count.set(char, (count.get(char) ?? 0) + 1);
	}

	for (const [char, cnt] of count) {
		if (buckets.has(cnt)) {
			buckets.get(cnt)?.push(char);
		} else {
			buckets.set(cnt, [char]);
		}
	}

	let res: string[] = [];

	for (let i = s.length; i >= 0; i--) {
		buckets.get(i)?.forEach((c) => res.push(c.repeat(i)));
	}

	return res.join("");
}

console.log(frequencySort2("tree"));
