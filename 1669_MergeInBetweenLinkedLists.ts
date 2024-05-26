import { LinkedList, ListNode } from "./helpers/LinkedLists"
import { drawTree } from "./helpers/drawTree"

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
	let curr = list1
	let i = 0

	while (i < a - 1 && curr !== null) {
		curr = curr.next
		i++
	}

	let head = curr

	while (i <= b && curr !== null) {
		curr = curr?.next
		i++
	}

	if (head !== null && head.next !== null) {
		head.next = list2
	}

	while (list2 !== null && list2.next !== null) {
		list2 = list2.next
	}

	if (list2 !== null) {
		list2.next = curr
	}

	return list1
}

const list1 = new LinkedList(0)
for (const n of [1, 2, 3, 4, 5, 6]) {
	list1.append(n)
}
const list2 = new LinkedList(1000000)

for (const n of [1000000, 1000001, 1000002, 1000003, 1000004]) {
	list2.append(n)
}

drawTree(mergeInBetween(list1.head, 2, 5, list2.head))
