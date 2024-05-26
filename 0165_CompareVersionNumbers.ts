function compareVersion(version1: string, version2: string): number {
	const v1 = version1.split(".")
	const v2 = version2.split(".")

	for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
		const num1 = i < v1.length ? Number(v1[i]) : 0
		const num2 = i < v2.length ? Number(v2[i]) : 0

		if (num1 < num2) return -1
		if (num1 > num2) return 1
	}

	return 0
}

function compareVersion2(version1: string, version2: string): number {
	let v1: number | number[] = version1.split(".").map(Number)
	let v2: number | number[] = version2.split(".").map(Number)

	while (v1.length < v2.length) {
		v1.push(0)
	}

	while (v1.length > v2.length) {
		v2.push(0)
	}

	v1 = Number(v1.join(""))
	v2 = Number(v2.join(""))

	let res = 0

	if (v1 > v2) {
		res = 1
	} else if (v1 < v2) {
		res = -1
	}

	return res
}
console.log(compareVersion2("0.9.9.9.9.9.9.9.9.9.9.9.9", "1.0"))
