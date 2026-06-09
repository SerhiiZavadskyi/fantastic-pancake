function closestPrimes(left: number, right: number): number[] {
	const MAX_NUM = right;

	let i: number, j: number;
	const isPrime = Array.from({ length: MAX_NUM + 1 }, () => true);
	const primes: number[] = [];

	for (i = 2; i * i <= MAX_NUM; i++) {
		if (isPrime[i]) {
			for (j = i * i; j <= MAX_NUM; j += i) {
				isPrime[j] = false;
			}
		}
	}

	for (i = 2; i <= MAX_NUM; i++) {
		if (isPrime[i] && i >= left) {
			primes.push(i);
		}
	}

	let min = right - left + 1;
	let num1 = -1;
	let num2 = -1;

	for (let i = 0; i < primes.length; i++) {
		const diff = primes[i + 1] - primes[i];

		if (diff < min) {
			min = diff;
			num1 = primes[i];
			num2 = primes[i + 1];
		}
	}

	return [num1, num2];
}

console.log(closestPrimes(4, 6));
