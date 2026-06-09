function countPrimeSetBits(left: number, right: number): number {
	let count = 0;
	const isPrime = (num: number): boolean => {
		if (num <= 1) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	};

	for (let i = left; i < right; i++) {
		const setBits = i.toString(2).split("0").join("").length;
		if (isPrime(setBits)) {
			count++;
		}
	}
	return count;
}

console.log(countPrimeSetBits(10, 15));
//console.log(countPrimeSetBits(842, 888));
