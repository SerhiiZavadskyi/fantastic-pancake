function fibo(n: number): number {
	if (n < 2) return n;

	return fibo(n - 1) + fibo(n - 2);
}

// more efficient
function fibonacci() {
	const cache: { [key: string]: number } = {};

	return function fib(n: number): number {
		if (cache[n]) {
			return cache[n];
		} else {
			count++;
			if (n < 2) return n;

			cache[n] = fib(n - 1) + fib(n - 2);

			return cache[n];
		}
	};
}

const fib = fibonacci();

console.log(fib(66), count);
//console.log(fibo(66));
