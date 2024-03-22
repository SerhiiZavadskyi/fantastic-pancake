import { LinkedList, ListNode } from "../helpers/LinkedLists"

function middleNode1(head: ListNode | null): ListNode | null {
	let count = 0
	let temp = head
	while (temp) {
		temp = temp.next
		count++
	}
	let mid = Math.floor(count / 2)

	while (mid > 0 && head) {
		head = head.next
		mid--
	}

	return head
}

function middleNode(head: ListNode | null): ListNode | null {
	let slow = head
	let fast = head

	while (slow && fast?.next) {
		slow = slow.next
		fast = fast.next.next
	}

	return slow
}

const list = new LinkedList(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)

console.log(middleNode(list.getList()))
console.log(middleNode1(list.getList()))
