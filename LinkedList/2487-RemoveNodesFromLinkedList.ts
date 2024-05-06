import { LinkedList, ListNode } from "../helpers/LinkedLists"

function removeNodes(head: ListNode | null): ListNode | null {
	const list: number[] = []
	let curr = head
	while (curr) {
		while (list.length && curr.val > list.at(-1)!) {
			list.pop()
		}
		list.push(curr.val)
		curr = curr.next
	}

	let dummy = new ListNode(-1)
	let dummyHead = dummy

	list.forEach((n) => {
		dummyHead.next = new ListNode(n)
		dummyHead = dummyHead.next
	})

	return dummy.next
}

function removeNodes2(head: ListNode | null): ListNode | null {
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

	let curr = head
	let currMax = curr?.val || Number.NEGATIVE_INFINITY

	while (curr && curr.next) {
		if (curr.next.val < currMax) {
			curr.next = curr.next.next
		} else {
			currMax = curr.next.val
			curr = curr.next
		}
	}

	return reverse(head)
}

const linkedList: LinkedList = new LinkedList(5)
linkedList.append(2)
linkedList.append(13)
linkedList.append(3)
linkedList.append(8)

console.log(removeNodes2(linkedList.getList()))
