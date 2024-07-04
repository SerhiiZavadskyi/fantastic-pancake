import { ListNode } from "./helpers/LinkedLists"

function mergeNodes(head: ListNode | null): ListNode | null {
	let curr = head
	const dummyNode = new ListNode(0)
	let tail = dummyNode

	while (curr && curr.next) {
		const node = new ListNode()

		while (curr.next && curr.next.val !== 0) {
			node.val += curr.next.val
			curr = curr?.next
		}

		tail.next = node
		tail = tail.next
		curr = curr.next
	}

	return dummyNode.next
}

function mergeNodes2(head: ListNode | null): ListNode | null {
	let curr = head

	while (curr && curr.next) {
		const node = curr.next

		curr = curr.next

		while (curr.next && curr.next.val !== 0) {
			node.val += curr.next.val
			curr = curr.next
		}

		curr = curr.next!
		node.next = curr.next
	}

	return head?.next || null
}
const head = new ListNode(
	0,
	new ListNode(
		3,
		new ListNode(1, new ListNode(0, new ListNode(4, new ListNode(5, new ListNode(2, new ListNode(0))))))
	)
)

console.log(mergeNodes2(head))
