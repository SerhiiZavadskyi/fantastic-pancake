function firstPalindrome1(words: string[]): string {
	for (const word of words) {
		let isPalindrome = true;

		for (let i = 0; i < word.length / 2; i++) {
			if (word[i] !== word[word.length - 1 - i]) {
				isPalindrome = false;
				break;
			}
		}

		if (isPalindrome) {
			return word;
		}
	}

	return "";
}

function firstPalindrome2(words: string[]): string {
	for (const word of words) {
		if (isPalindrome(word)) {
			return word;
		}
	}

	return "";
}

function firstPalindrome3(words: string[]): string {
	for (const word of words) {
		if (word === word.split("").reverse().join("")) {
			return word;
		}
	}

	return "";
}

function firstPalindrome4(words: string[]): string {
	for (const word of words) {
		let l = 0;
		let r = word.length - 1;

		while (word[l] === word[r]) {
			if (l >= r) {
				return word;
			}

			l++;
			r--;
		}
	}

	return "";
}

function isPalindrome(s: string): boolean {
	for (let i = 0; i < s.length / 2; i++) {
		if (s[i] !== s[s.length - 1 - i]) {
			return false;
		}
	}

	return true;
}

console.log(firstPalindrome3(["abc", "car", "ada", "racecar", "cool"]));
