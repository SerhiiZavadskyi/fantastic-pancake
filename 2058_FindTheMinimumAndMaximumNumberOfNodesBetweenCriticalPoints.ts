import { ListNode, LinkedList } from "./helpers/LinkedLists"

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
	let prev = head!
	let curr = head?.next!
	let next = curr?.next!
	let minDist = Infinity,
		maxDist = -1,
		prevCritIndex = 0,
		firstCritIndex = 0,
		i = 1

	const isCritical = (): boolean => {
		return (prev?.val > curr?.val && curr?.val < next?.val) || (prev?.val < curr?.val && curr?.val > next?.val)
	}

	while (next) {
		if (isCritical()) {
			if (firstCritIndex) {
				maxDist = i - firstCritIndex
				minDist = Math.min(minDist, i - prevCritIndex)
			} else {
				firstCritIndex = i
			}
			prevCritIndex = i
		}
		prev = curr!
		curr = next
		next = next.next!
		i++
	}

	if (minDist === Infinity) {
		minDist = -1
	}

	return [minDist, maxDist]
}

const values = [5, 3, 1, 2, 5, 1, 2]
const head = new LinkedList(values[0])

for (let i = 1; i < values.length; i++) {
	head.append(values[i])
}

console.log(nodesBetweenCriticalPoints(head.getList()))
