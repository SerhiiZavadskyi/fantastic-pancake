import { ListNode } from "../helpers/LinkedLists"

function deleteNode(node: ListNode | null): void {
	if (node && node.next) {
		node.val = node.next.val
		node.next = node && node.next && node.next.next
	}
}
