import { MaxHeap } from "./0502_IPO"

function longestSubarray(nums: number[], limit: number): number {
	let res = 0
	let l = 0
	const maxQueue: number[] = []
	const minQueue: number[] = []

	for (let r = 0; r < nums.length; r++) {
		while (maxQueue.length && nums[maxQueue.at(-1)!] < nums[r]) maxQueue.pop()
		while (minQueue.length && nums[minQueue.at(-1)!] > nums[r]) minQueue.pop()
		maxQueue.push(r)
		minQueue.push(r)

		let diff = nums[maxQueue[0]] - nums[minQueue[0]]

		if (diff <= limit) {
			res = Math.max(res, r - l + 1)
		} else {
			l++

			if (maxQueue[0] < l) maxQueue.shift()
			if (minQueue[0] < l) minQueue.shift()
		}
	}

	return res
}

function longestSubarray2(nums: number[], limit: number): number {
	let res = 0
	let l = 0
	const maxHeap = new MaxHeap()
	const minHeap = new MaxHeap()

	for (let r = 0; r < nums.length; r++) {
		maxHeap.push([nums[r], r])
		minHeap.push([-nums[r], r])

		while (maxHeap.heap[0][0] - minHeap.heap[0][0] * -1 > limit) {
			l = Math.min(maxHeap.heap[0][1], minHeap.heap[0][1]) + 1

			while (maxHeap.heap[0][1] < l) {
				maxHeap.pop()
			}
			while (minHeap.heap[0][1] < l) {
				minHeap.pop()
			}
		}

		res = Math.max(res, r - l + 1)
	}

	return res
}
console.log(longestSubarray([8, 2, 4, 7], 4))
