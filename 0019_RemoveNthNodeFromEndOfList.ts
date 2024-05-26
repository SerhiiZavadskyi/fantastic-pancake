import { ListNode } from "./ListNode"
import { inspect } from "util"

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
	const dummyNode = new ListNode(0, head)
	let left = dummyNode
	let right = head

	while (n > 0 && right) {
		right = right.next
		n--
	}

	while (right) {
		right = right.next
		left = left.next!
	}

	left.next = left.next!.next

	return dummyNode.next
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	if (head == null) {
		return head
	}
	let count: number = 1
	let current: ListNode | null = head
	while (current.next !== null) {
		count++
		current = current.next
	}

	let indexToRemove: number = count - n

	if (indexToRemove === 0) {
		return head.next
	}
	current = head
	for (let i = 0; i < indexToRemove - 1; i++) {
		current = current.next!
	}
	current.next = current.next!.next

	return head
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log(inspect(removeNthFromEnd(head, 2), { showHidden: false, depth: null, colors: true }))
