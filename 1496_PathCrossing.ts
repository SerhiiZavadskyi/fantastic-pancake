function isPathCrossing2(path: string): boolean {
	let [x, y] = [0, 0];
	const visitedPoints: string[] = [`(${x},${y})`];

	for (let p of path) {
		if (p === "N") {
			y++;
		}
		if (p === "S") {
			y--;
		}
		if (p === "E") {
			x++;
		}
		if (p === "W") {
			x--;
		}
		const newPoint = `(${x},${y})`;

		if (visitedPoints.includes(newPoint)) return true;

		visitedPoints.push(newPoint);
	}

	return false;
}

function isPathCrossing(path: string): boolean {
	let [x, y] = [0, 0];
	const visited = new Set();

	const points: Record<string, number[]> = {
		N: [0, 1],
		S: [0, -1],
		E: [1, 0],
		W: [-1, 0],
	};

	for (const p of path) {
		visited.add(`${x},${y}`);

		const [dx, dy] = points[p];
		x += dx;
		y += dy;

		if (visited.has(`${x},${y}`)) {
			return true;
		}
	}

	return false;
}

console.log(isPathCrossing("NESW"));
