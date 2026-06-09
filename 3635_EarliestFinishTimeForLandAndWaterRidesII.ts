function earliestFinishTime(
	landStartTime: number[],
	landDuration: number[],
	waterStartTime: number[],
	waterDuration: number[],
): number {
	function helper(start1: number[], duration1: number[], start2: number[], duration2: number[]): number {
		let finish1 = Infinity;
		let finish2 = Infinity;

		for (let i = 0; i < start1.length; i++) {
			finish1 = Math.min(finish1, start1[i] + duration1[i]);
		}

		for (let i = 0; i < start2.length; i++) {
			finish2 = Math.min(finish2, Math.max(start2[i], finish1) + duration2[i]);
		}

		return finish2;
	}

	const landWater = helper(landStartTime, landDuration, waterStartTime, waterDuration);
	const waterLand = helper(waterStartTime, waterDuration, landStartTime, landDuration);

	return Math.min(landWater, waterLand);
}

console.log(earliestFinishTime([2, 8], [4, 1], [6], [3]));
