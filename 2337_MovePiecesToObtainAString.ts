function canChange(start: string, target: string): boolean {
	if (start === target) return true;
	let l = 0,
		r = 0;

	for (let i = 0; i < start.length; i++) {
		const curr = start[i];
		const goal = target[i];

		if (curr === "R") {
			if (l > 0) return false;
			r++;
		}
		if (goal === "L") {
			if (r > 0) return false;
			l++;
		}
		if (goal === "R") {
			if (r === 0) return false;
			r--;
		}
		if (curr === "L") {
			if (l === 0) return false;
			l--;
		}
	}
	return l === 0 && r === 0;
}
console.log(canChange("R_L_", "__LR"));
console.log(canChange("_L__R__R_", "L______RR"));
