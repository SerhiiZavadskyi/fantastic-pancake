function checkRecord(n: number): number {
	const MOD = 10 ** 9 + 7

	if (n === 1) {
		return 3
	}

	let res = {
		"0-0": 1,
		"0-1": 1,
		"0-2": 0,
		"1-0": 1,
		"1-1": 0,
		"1-2": 0,
	}

	for (let i = 0; i < n - 1; i++) {
		const temp = {
			"0-0": 0,
			"0-1": 0,
			"0-2": 0,
			"1-0": 0,
			"1-1": 0,
			"1-2": 0,
		}

		temp["0-0"] = ((res["0-0"] + res["0-1"]) % MOD) + (res["0-2"] % MOD)
		temp["1-0"] = ((res["1-0"] + res["1-1"]) % MOD) + (res["1-2"] % MOD)

		temp["0-1"] = res["0-0"]
		temp["1-1"] = res["1-0"]
		temp["0-2"] = res["0-1"]
		temp["1-2"] = res["1-1"]

		temp["1-0"] = (temp["1-0"] + ((((res["0-0"] + res["0-1"]) % MOD) + res["0-2"]) % MOD)) % MOD

		res = temp
	}

	return Object.values(res).reduce((acc, curr) => acc + curr, 0) % MOD
}

console.log(checkRecord(2))
