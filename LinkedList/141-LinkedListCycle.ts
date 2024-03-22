import { ListNode } from "../ListNode"

function hasCycle(head: ListNode | null): boolean {
	if (!head) return false

	let slow = head
	let fast = head

	while (fast && fast.next) {
		if (slow.next) {
			slow = slow.next
		}

		if (fast.next.next) {
			fast = fast.next.next
		}

		if (slow === fast) return true
	}

	return false
}

const head = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))))

console.log(hasCycle(head))
