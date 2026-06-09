function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
	const sumMap = new Map<number, number>(); // id: sum

	for (const [id, val] of [...nums1, ...nums2]) {
		sumMap.set(id, (sumMap.get(id) ?? 0) + val);
	}

	return [...sumMap].sort((a, b) => a[0] - b[0]);
}

console.log(
	mergeArrays(
		[
			[2, 4],
			[3, 6],
			[5, 5],
		],
		[
			[1, 3],
			[4, 3],
		]
	)
);
