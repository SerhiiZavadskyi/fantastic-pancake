function sortPeople(names: string[], heights: number[]): string[] {
	const people = new Map()

	names.forEach((personName, i) => people.set(heights[i], personName))

	return [...people].sort((a, b) => b[0] - a[0]).map((p) => p[1])
}

function sortPeopleCountingSort(names: string[], heights: number[]): string[] {
	const count = new Array(Math.max(...heights))

	for (let i = 0; i < names.length; i++) {
		count[count.length - heights[i]] = names[i]
	}

	return count.filter(Boolean)
}

console.log(sortPeopleCountingSort(["Mary", "John", "Emma"], [180, 165, 170]))
