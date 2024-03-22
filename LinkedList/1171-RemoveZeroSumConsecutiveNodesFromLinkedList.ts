import { LinkedList, ListNode } from "../helpers/LinkedLists"
import { drawTree } from "../helpers/drawTree"

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
	const dummyNode: ListNode = new ListNode(0)
	dummyNode.next = head
	const lastOccurrenceOfSum: Map<number, ListNode> = new Map()
	let sum = 0

	let currentNode: ListNode | null = dummyNode
	while (currentNode) {
		sum += currentNode.val
		lastOccurrenceOfSum.set(sum, currentNode)
		currentNode = currentNode.next
	}

	sum = 0
	currentNode = dummyNode

	while (currentNode) {
		sum += currentNode.val
		currentNode.next = lastOccurrenceOfSum.get(sum)!.next
		currentNode = currentNode.next
	}

	return dummyNode.next
}

const list = new LinkedList(1)
list.append(2)
list.append(3)
list.append(-3)
list.append(4)

drawTree(removeZeroSumSublists(list.getList()))
