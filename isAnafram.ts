function isAnagram(s: string, t: string): boolean {
	return Array.from(s).sort().join("") === Array.from(t).sort().join("");
}

function isAnagram2(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	for (const char of s) {
		t = t.replace(char, "");
	}

	return !t.length;
}

// the most efficient

function isAnagram3(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	const counter = Array.from({ length: 26 }, () => 0);

	for (let i = 0; i < s.length; i++) {
		counter[s.charCodeAt(i) - 97]++;
		counter[t.charCodeAt(i) - 97]--;
	}

	for (let c of counter) {
		if (c !== 0) return false;
	}

	return true;
}

const s = "aa",
	t = "ab";

console.log(isAnagram3(s, t));
