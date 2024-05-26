import { LinkedList, ListNode } from "./helpers/LinkedLists"

function doubleIt(head: ListNode | null): ListNode | null {
	const stack: ListNode[] = []
	let curr = head
	while (curr) {
		stack.push(curr)
		curr = curr.next
	}

	let k = 0
	while (stack.length > 0) {
		const node = stack.pop()!
		const val = node.val * 2 + k / 10
		k = val - (val % 10)
		node.val = val % 10
	}

	if (k !== 0) {
		return new ListNode(k / 10, head)
	}

	return head
}

function doubleIt3(head: ListNode | null): ListNode | null {
	if (head && head.val > 4) {
		head = new ListNode(0, head)
	}
	let temp = head

	while (temp) {
		temp.val = (temp.val * 2) % 10

		if (temp.next !== null && temp.next.val > 4) {
			temp.val += 1
		}

		temp = temp.next
	}

	return head
}

function doubleIt2(head: ListNode | null): ListNode | null {
	function reverse(head: ListNode | null) {
		let prev: ListNode | null = null,
			curr = head

		while (curr) {
			const temp = curr.next
			curr.next = prev
			prev = curr
			curr = temp
		}

		return prev
	}

	head = reverse(head)

	let k = 0
	const list: number[] = []
	while (head) {
		let val = head.val * 2 + k / 10
		k = val - (val % 10)
		list.push(val % 10)
		head = head.next
	}

	const dummy = new ListNode(-1)
	let dummyHead = dummy

	for (const n of list) {
		dummyHead.next = new ListNode(n)
		dummyHead = dummyHead.next
	}
	if (k !== 0) {
		dummyHead.next = new ListNode(k / 10)
	}
	return reverse(dummy.next)
}
const head = [9, 9, 9]
//const head = [9, 1, 9, 5, 0, 5, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
const linkedList = new LinkedList(head[0])

for (let i = 1; i < head.length; i++) {
	linkedList.append(head[i])
}

console.log(doubleIt2(linkedList.getList()))
