function minSteps(s: string, t: string): number {
	const countS = new Array(26).fill(0);
	const countT = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		countS[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
		countT[t[i].charCodeAt(0) - "a".charCodeAt(0)]++;
	}

	let steps = 0;

	for (let i = 0; i < 26; i++) {
		steps += Math.abs(countS[i] - countT[i]);
	}

	return steps / 2;
}

function minSteps2(s: string, t: string): number {
	const count = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		count[s.charCodeAt(i) - 97]++;
		count[t.charCodeAt(i) - 97]--;
	}

	return count.reduce((acc, curr) => acc + Math.abs(curr), 0) / 2;
}

function minSteps3(s: string, t: string): number {
	const count = new Map();
	for (let i = 0; i < s.length; i++) {
		count.set(s.charCodeAt(i), (count.get(s.charCodeAt(i)) || 0) + 1);
		count.set(t.charCodeAt(i), (count.get(t.charCodeAt(i)) || 0) - 1);
	}
	let res = 0;
	for (const [_, c] of count) {
		res += Math.abs(c);
	}

	return res / 2;
}

console.log(minSteps3("leetcode", "practice"));
