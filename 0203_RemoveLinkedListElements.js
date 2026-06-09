function removeElements(head, val) {
	const dummyNode = new ListNode(-1, head);
	let prev = dummyNode;
	let curr = head;

	while (curr) {
		const nxt = curr.next;

		if (curr.val === val) {
			prev.next = nxt;
		} else {
			prev = curr;
		}

		curr = nxt;
	}

	return dummyNode.next;
}

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

console.log(
	removeElements(
		new ListNode(
			1,
			new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
		),
		6
	)
);
