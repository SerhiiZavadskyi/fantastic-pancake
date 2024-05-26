import { LinkedList, ListNode } from "./helpers/LinkedLists"

function isPalindrome(head: ListNode | null): boolean {
	const list: number[] = []

	while (head) {
		list.push(head.val)
		head = head.next
	}

	for (let i = 0; i < list.length / 2; i++) {
		if (list[i] !== list.at(-(i + 1))) {
			return false
		}
	}

	return true
}

function isPalindrome2(head: ListNode | null): boolean {
	if (!head) return false

	let slow = head
	let fast = head

	//find middle
	while (fast && fast.next) {
		slow = slow.next!
		fast = fast.next.next!
	}

	//reverse second half
	let prev: ListNode | null = null
	while (slow) {
		const temp = slow.next
		slow.next = prev
		prev = slow
		slow = temp!
	}

	//compare start and end
	while (prev) {
		if (prev.val !== head.val) {
			return false
		}

		prev = prev.next
		head = head.next!
	}

	return true
}

const list: LinkedList = new LinkedList(1)

for (const n of [2, 2, 1]) {
	list.append(n)
}

console.log(isPalindrome2(list.getList()))
