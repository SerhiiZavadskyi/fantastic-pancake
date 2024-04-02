function isIsomorphic(s: string, t: string): boolean {
	const map1 = new Map()
	const map2 = new Map()

	for (let i = 0; i < s.length; i++) {
		if ((map1.has(s[i]) && map1.get(s[i]) !== t[i]) || (map2.has(t[i]) && map2.get(t[i]) !== s[i])) {
			return false
		}

		map1.set(s[i], t[i])
		map2.set(t[i], s[i])
	}

	return true
}

console.log(isIsomorphic("egg", "ade"))
