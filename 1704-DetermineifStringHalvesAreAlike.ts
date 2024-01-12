function halvesAreAlike(s: string): boolean {
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let count = 0;

	for (let i = 0; i < s.length / 2; i++) {
		const leftIdx = vowels.indexOf(s[i]);
		const rightIdx = vowels.indexOf(s[s.length - 1 - i]);

		if (leftIdx !== -1) count++;
		if (rightIdx !== -1) count--;
	}

	return count === 0;
}

function halvesAreAlike2(s: string): boolean {
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let count = 0;

	for (let i = 0; i < s.length / 2; i++) {
		if (vowels.includes(s[i])) count++;
		if (vowels.includes(s[s.length - 1 - i])) count--;
	}

	return count === 0;
}

function halvesAreAlike3(s: string): boolean {
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let count = 0;
	let [left, right] = [0, s.length - 1];

	while (left < right) {
		if (vowels.includes(s[left])) count++;
		if (vowels.includes(s[right])) count--;
		left++;
		right--;
	}

	return count === 0;
}
console.log(halvesAreAlike("textbook"));
