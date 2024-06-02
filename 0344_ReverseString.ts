/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
	let l = 0
	let r = s.length - 1

	while (l < r) {
		const tail = s[r]
		s[r] = s[l]
		s[l] = tail
		l++
		r--
	}

	console.log(s)
}

function reverseString2(s: string[]): void {
	for (let l = 0; l < s.length / 2; l++) {
		const r = s.length - 1 - l
		const temp = s[l]
		s[l] = s[r]
		s[r] = temp
	}
}
reverseString(["h", "e", "l", "l", "o"])
