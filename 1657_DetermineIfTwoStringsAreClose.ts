function closeStrings(word1: string, word2: string): boolean {
	if (word1.length !== word2.length) return false;
	if (word1 === word2) return true;

	const count1 = new Array(26).fill(0);
	const count2 = new Array(26).fill(0);
	const set1 = new Set();

	for (let i = 0; i < word1.length; i++) {
		count1[word1.charCodeAt(i) - 97]++;
		count2[word2.charCodeAt(i) - 97]++;
		set1.add(word1[i]);
		set1.add(word2[i]);
	}

	count1.sort();
	count2.sort();

	return (
		set1.size === count1.filter(Boolean).length &&
		count1.every((num, i) => count2[i] === num)
	);
}

function closeStrings2(word1: string, word2: string): boolean {
	if (word1.length !== word2.length) return false;
	if (word1 === word2) return true;

	const count1 = new Array(26).fill(0);
	const count2 = new Array(26).fill(0);
	const set1 = new Set();
	const set2 = new Set();

	for (const char of word1) {
		count1[char.charCodeAt(0) - 97]++;
		set1.add(char);
	}

	for (const char of word2) {
		count2[char.charCodeAt(0) - 97]++;
		set2.add(char);
	}

	count1.sort();
	count2.sort();

	const eqSet =
		set1.size === set2.size && [...set1].every((x) => set2.has(x));
	const eqArr = count1.every((num, i) => count2[i] === num);

	return eqSet && eqArr;
}

console.log(closeStrings("abc", "bca")); //true
console.log(closeStrings("a", "aa")); //false
console.log(closeStrings("cabbba", "abbccc")); // true
