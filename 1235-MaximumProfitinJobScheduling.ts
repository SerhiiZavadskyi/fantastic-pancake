function jobScheduling(
	startTime: number[],
	endTime: number[],
	profit: number[]
): number {
	const intervals: number[][] = startTime.map((t, i) => [
		t,
		endTime[i],
		profit[i],
	]);
	intervals.sort((a, b) => a[1] - b[1]);
	const dp: number[][] = [[0, 0]];

	for (const [start, end, profit] of intervals) {
		const i = binarySearch(dp, start);
		const maxProfit = dp[i][1] + profit;

		if (maxProfit > dp[dp.length - 1][1]) {
			dp.push([end, maxProfit]);
		}
	}

	return dp[dp.length - 1][1];
}

function binarySearch(jobs: number[][], start: number): number {
	let left = 0,
		right = jobs.length - 1;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		if (jobs[mid][0] <= start) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return right;
}

const startTime = [6, 15, 7, 11, 1, 3, 16, 2],
	endTime = [19, 18, 19, 16, 10, 8, 19, 8],
	profit = [2, 9, 1, 19, 5, 7, 3, 19];
console.log(jobScheduling(startTime, endTime, profit));
