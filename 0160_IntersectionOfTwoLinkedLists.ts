import { ListNode } from "./helpers/LinkedLists"

function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	if (headA === null || headB === null) return null
	let lenA = len(headA)
	let lenB = len(headB)

	if (lenA > lenB) {
		let diff = lenA - lenB

		while (diff > 0 && headA) {
			headA = headA.next
			diff--
		}
	} else {
		let diff = lenB - lenA

		while (diff > 0 && headB) {
			headB = headB.next
			diff--
		}
	}

	while (headA && headB) {
		if (headA === headB) {
			return headA
		}
		headA = headA.next
		headB = headB.next
	}

	return null
}

function len(head: ListNode | null): number {
	let res = 0

	while (head) {
		res++
		head = head.next!
	}

	return res
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	let l1 = headA
	let l2 = headB

	while (l1 !== l2) {
		l1 = l1 ? l1.next : headB
		l2 = l2 ? l2.next : headA
	}
	return l1
}

const intersectionNode = new ListNode(8, new ListNode(4, new ListNode(5)))
const head1 = new ListNode(4, new ListNode(1, intersectionNode))
const head2 = new ListNode(5, new ListNode(6, new ListNode(1, intersectionNode)))

console.log(getIntersectionNode(head1, head2))
console.log(getIntersectionNode2(head1, head2))
