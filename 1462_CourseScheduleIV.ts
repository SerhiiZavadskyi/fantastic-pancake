function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
	const res: boolean[][] = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));
	prerequisites.forEach(([x, y]) => (res[x][y] = true));

	for (let k = 0; k < numCourses; k++) {
		for (let i = 0; i < numCourses; i++) {
			for (let j = 0; j < numCourses; j++) {
				res[i][j] ||= res[i][k] && res[k][j];
			}
		}
	}

	return queries.map(([u, v]) => res[u][v]);
}

console.log(
	checkIfPrerequisite(
		2,
		[[1, 0]],
		[
			[0, 1],
			[1, 0],
		]
	)
);
