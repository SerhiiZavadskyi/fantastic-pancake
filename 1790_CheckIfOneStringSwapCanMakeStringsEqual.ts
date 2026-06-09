function areAlmostEqual(s1: string, s2: string): boolean {
	const INDEXES: number[] = [];

	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			INDEXES.push(i);
		}

		if (INDEXES.length > 2) return false;
	}

	if (INDEXES.length === 2) {
		const [i, j] = INDEXES;

		if (s1[i] === s2[j] && s1[j] === s2[i]) return true;

		return false;
	}

	return INDEXES.length === 0;
}

console.log(areAlmostEqual("bank", "kanb"));
