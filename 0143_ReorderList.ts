import { LinkedList, ListNode } from "./helpers/LinkedLists"

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
	let slow = head
	let fast = head?.next

	while (slow && fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
	}

	let second = slow?.next!
	slow!.next = null
	let prev: null | ListNode = null

	while (second) {
		const temp = second.next
		second.next = prev
		prev = second
		second = temp!
	}

	let first = head
	second = prev!

	while (first && second) {
		let temp1 = first.next
		let temp2 = second.next
		first.next = second
		second.next = temp1
		first = temp1
		second = temp2!
	}
	console.log(head)
}

function reorderList2(head: ListNode | null): void {
	const list: number[] = []

	while (head) {
		list.push(head.val)
		head = head.next
	}

	const reorderedList: number[] = []

	for (let i = 0; i < list.length / 2; i++) {
		reorderedList[2 * i] = list[i]
		reorderedList[2 * i + 1] = list[list.length - 1 - i]
	}
	reorderedList.length = list.length

	head = reorderedList.reverse().reduce((acc: null | ListNode, curr) => {
		if (acc === null) {
			acc = new ListNode(curr)
		} else {
			acc = new ListNode(curr, acc)
		}
		return acc
	}, null)

	console.log(head)
}

const list: LinkedList = new LinkedList(1)

for (const n of [2, 3, 4, 5]) {
	list.append(n)
}

reorderList(list.getList()) // [1,5,2,4,3]
