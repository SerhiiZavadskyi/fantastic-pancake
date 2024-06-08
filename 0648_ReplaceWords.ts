function replaceWords(dictionary: string[], sentence: string): string {
	const words = sentence.split(" ")

	for (let i = 0; i < words.length; i++) {
		for (const root of dictionary) {
			if (words[i].startsWith(root)) {
				words[i] = root
			}
		}
	}

	return words.join(" ")
}

class TrieNode {
	children: Map<string, TrieNode>
	isEndOfWord: boolean

	constructor() {
		this.children = new Map()
		this.isEndOfWord = false
	}
}

class Trie {
	root: TrieNode

	constructor() {
		this.root = new TrieNode()
	}

	insert(word: string): void {
		let node = this.root
		for (const char of word) {
			if (!node.children.has(char)) {
				node.children.set(char, new TrieNode())
			}
			node = node.children.get(char)!
		}
		node.isEndOfWord = true
	}

	searchRoot(word: string): string {
		let node = this.root
		let prefix = ""
		for (const char of word) {
			if (!node.children.has(char)) {
				break
			}
			prefix += char
			node = node.children.get(char)!
			if (node.isEndOfWord) {
				return prefix
			}
		}
		return word
	}
}

function replaceWords2(dictionary: string[], sentence: string): string {
	const trie = new Trie()
	for (const root of dictionary) {
		trie.insert(root)
	}

	const words = sentence.split(" ")
	for (let i = 0; i < words.length; i++) {
		words[i] = trie.searchRoot(words[i])
	}

	return words.join(" ")
}

console.log(replaceWords2(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"))
