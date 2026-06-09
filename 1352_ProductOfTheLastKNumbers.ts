class ProductOfNumbers {
	prefix: number[];

	constructor() {
		this.prefix = [1];
	}

	add(num: number): void {
		if (num === 0) {
			this.prefix = [1];
		} else {
			this.prefix.push(this.prefix.at(-1)! * num);
		}
	}

	getProduct(k: number): number {
		const len = this.prefix.length;

		if (len <= k) return 0;

		return this.prefix[len - 1] / this.prefix[len - k - 1];
	}
}

const productOfNumbers = new ProductOfNumbers();
console.log(productOfNumbers.add(3)); // [3]
console.log(productOfNumbers.add(0)); // [3,0]
console.log(productOfNumbers.add(2)); // [3,0,2]
console.log(productOfNumbers.add(5)); // [3,0,2,5]
console.log(productOfNumbers.add(4)); // [3,0,2,5,4]
console.log(productOfNumbers.getProduct(2)); // return 20. The product of the last 2 numbers is 5 * 4 = 20
console.log(productOfNumbers.getProduct(3)); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
console.log(productOfNumbers.getProduct(4)); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
console.log(productOfNumbers.add(8)); // [3,0,2,5,4,8]
console.log(productOfNumbers.getProduct(2)); // return 32. The product of the last 2 numbers is 4 * 8 = 32
console.log(productOfNumbers.prefix);
