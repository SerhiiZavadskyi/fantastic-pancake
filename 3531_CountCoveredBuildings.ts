function countCoveredBuildings(n: number, buildings: number[][]): number {
	const dict_x: Map<number, number[]> = new Map();
	const dict_y = new Map<number, number[]>();
	let res = 0;

	for (const [x, y] of buildings) {
		dict_x.set(x, []);
		dict_y.set(y, []);
	}

	for (const [x, y] of buildings) {
		dict_x.get(x)?.push(y);
		dict_y.get(y)?.push(x);
	}

	dict_x.forEach((v: any[]) => v.sort((a: number, b: number) => a - b));
	dict_y.forEach((v: number[]) => v.sort((a: number, b: number) => a - b));

	for (let [x, y] of buildings) {
		const ox = dict_x.get(x);
		const oy = dict_y.get(y);
		if (oy[0] < x && oy[oy.length - 1]! > x && ox[0] < y && ox[ox.length - 1] > y) {
			res++;
		}
	}

	return res;
}

console.log(
	countCoveredBuildings(3, [
		[1, 2],
		[2, 2],
		[3, 2],
		[2, 1],
		[2, 3],
	])
);
