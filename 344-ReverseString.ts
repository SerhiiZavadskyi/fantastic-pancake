/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
	let l = 0;
	let r = s.length - 1;

	while (l < r) {
		const tail = s[r];
		s[r] = s[l];
		s[l] = tail;
		l++;
		r--;
	}

	console.log(s);
}

reverseString(["h", "e", "l", "l", "o"]);
