function minWindow(s: string, t: string): string {
	if (t === "") {
		return "";
	}

	const countT: Record<string, number> = {};
	const window: Record<string, number> = {};

	for (const c of t) {
		countT[c] = (countT[c] || 0) + 1;
	}

	let have = 0;
	let need = Object.keys(countT).length;
	let res = [-1, -1];
	let resLen = Infinity;
	let l = 0;

	for (let r = 0; r < s.length; r++) {
		let c = s[r];
		window[c] = (window[c] || 0) + 1;

		if (c in countT && window[c] === countT[c]) {
			have += 1;
		}

		while (have === need) {
			if (r - l + 1 < resLen) {
				res = [l, r];
				resLen = r - l + 1;
			}

			window[s[l]] -= 1;

			if (s[l] in countT && window[s[l]] < countT[s[l]]) {
				have -= 1;
			}

			l += 1;
		}
	}

	let [start, end] = res;

	return resLen !== Infinity ? s.slice(start, end + 1) : "";
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
