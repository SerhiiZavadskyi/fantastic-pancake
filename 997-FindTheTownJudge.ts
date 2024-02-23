function findJudge(n: number, trust: number[][]): number {
	const incoming = new Array(n + 1).fill(0);
	const outgoing = new Array(n + 1).fill(0);

	for (const [src, dst] of trust) {
		outgoing[src]++;
		incoming[dst]++;
	}

	for (let i = 1; i <= trust.length + 1; i++) {
		if (outgoing[i] === 0 && incoming[i] === n - 1) {
			return i;
		}
	}

	return -1;
}

function findJudge2(n: number, trust: number[][]): number {
	const diff = new Map();

	for (const [a, b] of trust) {
		diff.set(a, (diff.get(a) || 0) - 1);
		diff.set(b, (diff.get(b) || 0) + 1);
	}

	for (let i = 1; i <= trust.length + 1; i++) {
		if ((diff.get(i) || 0) === n - 1) return i;
	}

	return -1;
}

console.log(findJudge2(2, [[1, 2]]));
console.log(findJudge2(1, []));
