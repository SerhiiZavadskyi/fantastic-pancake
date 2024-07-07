function numWaterBottles(numBottles: number, numExchange: number): number {
	let res = numBottles

	while (numBottles >= numExchange) {
		const exchanged = Math.floor(numBottles / numExchange)
		const remain = numBottles % numExchange

		numBottles = remain + exchanged
		res += exchanged
	}

	return res
}

const numWaterBottles2 = (numBottles: number, numExchange: number): number =>
	numBottles + Math.floor((numBottles - 1) / (numExchange - 1))
console.log(numWaterBottles2(15, 4))
