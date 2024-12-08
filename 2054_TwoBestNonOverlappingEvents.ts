function maxTwoEvents(events: number[][]): number {
	events.sort((a, b) => a[0] - b[0]);
	events.push([Infinity, Infinity, 0]);

	let max = 0;

	for (let i = events.length - 2; i >= 0; i--) {
		const [start, end, value] = events[i];

		if (value < events[i + 1][2]) {
			events[i][2] = events[i + 1][2];
		}

		let left = i + 1;
		let right = events.length - 1;

		while (left < right) {
			const mid = Math.floor((right + left) / 2);

			const midStart = events[mid][0];
			if (midStart >= end + 1) {
				right = mid;
			} else {
				left = mid + 1;
			}
		}
		max = Math.max(max, value + events[left][2]);
	}

	console.log(max);

	return max;
}

console.log(
	maxTwoEvents([
		[1, 3, 2],
		[4, 5, 2],
		[2, 4, 3],
	])
);
