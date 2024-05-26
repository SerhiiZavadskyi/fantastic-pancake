import { LinkedList, ListNode } from "./helpers/LinkedLists"
import { drawTree } from "./helpers/drawTree"

function reverseList(head: ListNode | null): ListNode | null {
	let prev: ListNode | null = null
	let curr = head

	while (curr) {
		const temp = curr.next
		curr.next = prev
		prev = curr
		curr = temp
	}

	return prev
}

function reverseListRecursive(head: ListNode | null): ListNode | null {
	if (!head) return null

	let newHead = head

	if (head.next) {
		newHead = reverseListRecursive(head.next)!
		head.next.next = head
	}

	head.next = null

	return newHead
}

const list: LinkedList = new LinkedList(1)

for (const n of [2, 3, 4, 5]) {
	list.append(n)
}

drawTree(reverseListRecursive(list.getList()))
