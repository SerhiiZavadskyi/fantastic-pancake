import { MaxHeap } from "./helpers/MaxHeap";

function pickGifts(gifts: number[], k: number): number {
	let max: number = Math.max(...gifts);

	while (k > 0) {
		const idx = gifts.findIndex((n) => n === max);
		gifts[idx] = Math.sqrt(max);
		max = Math.max(...gifts);
		k--;
	}

	return gifts.reduce((acc, curr) => acc + Math.floor(curr), 0);
}

function pickGifts2(gifts: number[], k: number): number {
	let maxHeap = new MaxHeap<number>();

	gifts.forEach((n: number) => maxHeap.push(n));

	while (k > 0) {
		const max: number = maxHeap.pop()!;
		maxHeap.push(Math.floor(Math.sqrt(max)));
		k--;
	}

	return maxHeap.getHeap().reduce((acc, curr) => acc + Math.floor(curr), 0);
}

console.log(pickGifts2([25, 64, 9, 4, 100], 4));
