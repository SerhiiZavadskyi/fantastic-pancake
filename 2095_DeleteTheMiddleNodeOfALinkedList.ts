class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function deleteMiddle(head: ListNode | null): ListNode | null {
	if (!head || !head.next) {
		return null;
	}

	let slow: ListNode | null = head;
	let fast: ListNode | null = head;
	let prev: ListNode | null = null;

	while (fast && fast.next) {
		prev = slow;
		slow = slow.next;
		fast = fast.next.next;
	}

	prev.next = slow.next;

	return head;
}

const head = [1, 3, 4, 7, 1, 2, 6];
const newHead = deleteMiddle(
	new ListNode(
		1,
		new ListNode(3, new ListNode(4, new ListNode(7, new ListNode(1, new ListNode(2, new ListNode(6)))))),
	),
);
const result: number[] = [];

let current = newHead;
while (current) {
	result.push(current.val);
	current = current.next;
}

console.log(result);
