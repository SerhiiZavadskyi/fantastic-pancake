function minimumRecolors(blocks: string, k: number): number {
	let min = Infinity;
	let countW = 0;

	for (let i = 0; i < blocks.length - k + 1; i++) {
		if (blocks[i] === "W") {
			countW++;
		}

		if (k - 1 <= i) {
			min = Math.min(min, countW);

			if (blocks[i - k + 1] === "W") {
				countW--;
			}
		}
	}

	return min;
}
console.log(minimumRecolors("WBWBBBW", 2));
