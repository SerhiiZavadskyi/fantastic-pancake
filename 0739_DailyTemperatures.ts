//brute force solution 🤮
function dailyTemperatures2(temperatures: number[]): number[] {
	const res: number[] = new Array(temperatures.length).fill(0);

	for (let i = 0; i < temperatures.length; i++) {
		for (let j = i; j < temperatures.length; j++) {
			if (temperatures[i] < temperatures[j] && !res[i]) {
				res[i] = j - i;
			}
		}
	}

	return res;
}

function dailyTemperatures(temperatures: number[]): number[] {
	const res: number[] = new Array(temperatures.length).fill(0);
	const stack: number[] = [];

	for (let i = 0; i < temperatures.length; i++) {
		while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
			const idx = stack.pop()!;

			res[idx] = i - idx;
		}
		stack.push(i);
	}

	return res;
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
