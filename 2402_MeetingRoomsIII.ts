function mostBooked(n: number, meetings: number[][]): number {
	meetings.sort((a, b) => a[0] - b[0]);
	const available = new Array(n).fill(0);
	const count = new Array(n).fill(0);

	for (let i = 0; i < meetings.length; i++) {
		const [start, end] = meetings[i];
		let flag = false;
		let minIdx = -1;
		let val = Number.MAX_SAFE_INTEGER;
		for (let j = 0; j < n; j++) {
			if (available[j] < val) {
				val = available[j];
				minIdx = j;
			}
			if (available[j] <= start) {
				flag = true;
				count[j]++;
				available[j] = end;
				break;
			}
		}
		if (!flag) {
			count[minIdx]++;
			available[minIdx] += end - start;
		}
	}

	let maxi = -1;
	let id = -1;
	for (let i = 0; i < n; i++) {
		if (count[i] > maxi) {
			maxi = count[i];
			id = i;
		}
	}
	return id;
}

console.log(
	mostBooked(1, [
		[1, 20],
		[2, 10],
		[3, 5],
		[4, 9],
		[6, 8],
	])
);
