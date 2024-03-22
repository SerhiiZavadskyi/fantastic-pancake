interface LinkedListInterface {
	prepend(val: number): LinkedListInterface
	append(val: number): LinkedListInterface
	insert(index: number, val: number): void
	delete(index: number): void
	printList(): number[]
	getList(): ListNode
}

export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

export class LinkedList implements LinkedListInterface {
	head: ListNode
	tail: ListNode
	length: number

	constructor(val: number) {
		this.head = {
			next: null,
			val,
		}
		this.tail = this.head
		this.length = 1
	}

	prepend(val: number): LinkedListInterface {
		const newNode = {
			val,
			next: this.head,
		}
		this.head = newNode
		this.length++

		return this
	}
	append(val: number): LinkedListInterface {
		const newNode = new ListNode(val)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}

	insert(index: number, val: number): number[] | LinkedListInterface {
		if (index === 0) {
			this.prepend(val)
			return this.printList()
		}

		if (index >= this.length) {
			return this.append(val)
		}

		const newNode = new ListNode(val)
		const leader = this.traverseToIndex(index - 1)
		const holdingPointer = leader.next

		leader.next = newNode
		newNode.next = holdingPointer
		this.length++

		return this.printList()
	}

	delete(index: number): number[] | ListNode | null {
		if (index === 0 && this.head.next) {
			const unwantedNode = this.head
			this.head = this.head.next
			this.length--

			return unwantedNode
		}

		if (index >= this.length) {
			return this.printList()
		}

		const leader = this.traverseToIndex(index - 1)
		const unwantedNode = leader.next

		if (unwantedNode) {
			leader.next = unwantedNode.next
		}

		this.length--

		return unwantedNode
	}

	reverse() {
		if (!this.head.next) {
			return this.head
		}

		let first = this.head
		this.tail = this.head
		let second = first.next

		while (second) {
			const temp = second.next
			second.next = first
			first = second
			second = temp
		}

		this.head.next = null
		this.head = first

		return this.head
	}

	printList(): number[] {
		const arr: number[] = []
		let currentNode: ListNode | null = this.head

		while (currentNode) {
			arr.push(currentNode.val)
			currentNode = currentNode.next
		}

		return arr
	}

	getList(): ListNode {
		return this.head
	}

	private traverseToIndex(index: number): ListNode {
		let counter = 0
		let currentNode: ListNode = this.head

		while (counter !== index) {
			if (currentNode && currentNode.next) {
				currentNode = currentNode.next
			}

			counter++
		}

		return currentNode
	}
}

// const myLinkedList = new LinkedList(2);
// myLinkedList.append(12);
// myLinkedList.append(13);

// console.log(myLinkedList.reverse());

// class DoublyListNode {
// 	next: DoublyListNode | null;
// 	prev: DoublyListNode | null;
// 	val: number;
// 	constructor(val: number) {
// 		this.next = null;
// 		this.prev = null;
// 		this.val = val;
// 	}
// }

// class DoublyLinkedList implements LinkedListInterface {
// 	head: DoublyListNode;
// 	tail: DoublyListNode;
// 	length: number;

// 	constructor(val: number) {
// 		this.head = {
// 			next: null,
// 			prev: null,
// 			val,
// 		};
// 		this.tail = this.head;
// 		this.length = 1;
// 	}

// 	prepend(val: number): LinkedListInterface {
// 		const newNode = {
// 			val,
// 			next: this.head,
// 			prev: null,
// 		};

// 		this.head.prev = newNode;
// 		this.head = newNode;
// 		this.length++;

// 		return this;
// 	}
// 	append(val: number): LinkedListInterface {
// 		const newNode = new DoublyListNode(val);
// 		newNode.prev = this.tail;
// 		this.tail.next = newNode;
// 		this.tail = newNode;
// 		this.length++;
// 		return this;
// 	}
// 	lookup(): number {
// 		throw new Error("Method not implemented.");
// 	}
// 	insert(index: number, val: number): number[] | LinkedListInterface {
// 		if (index === 0) {
// 			this.prepend(val);
// 			return this.printList();
// 		}

// 		if (index >= this.length) {
// 			return this.append(val);
// 		}

// 		const newNode = new DoublyListNode(val);
// 		const leader = this.traverseToIndex(index - 1);
// 		const follower = leader.next;

// 		leader.next = newNode;
// 		newNode.prev = leader;
// 		newNode.next = follower;

// 		if (follower) {
// 			follower.prev = newNode;
// 		}

// 		this.length++;

// 		return this.printList();
// 	}

// 	delete(index: number): number[] | DoublyListNode | null {
// 		if (index === 0 && this.head.next) {
// 			const unwantedNode = this.head;
// 			this.head = this.head.next;
// 			this.head.prev = null;
// 			this.length--;

// 			return unwantedNode;
// 		}

// 		if (index >= this.length) {
// 			return this.printList();
// 		}

// 		const leader = this.traverseToIndex(index - 1);
// 		const unwantedNode = leader.next;

// 		if (unwantedNode) {
// 			const follower = unwantedNode.next;

// 			leader.next = follower;
// 			if (follower) {
// 				follower.prev = leader;
// 			}
// 		}

// 		this.length--;

// 		return unwantedNode;
// 	}

// 	printList(): number[] {
// 		const arr: number[] = [];
// 		let currentNode: DoublyListNode | null = this.head;

// 		while (currentNode) {
// 			arr.push(currentNode.val);
// 			currentNode = currentNode.next;
// 		}

// 		return arr;
// 	}

// 	private traverseToIndex(index: number): DoublyListNode {
// 		let counter = 0;
// 		let currentNode: DoublyListNode = this.head;

// 		while (counter !== index) {
// 			if (currentNode && currentNode.next) {
// 				currentNode = currentNode.next;
// 			}

// 			counter++;
// 		}

// 		return currentNode;
// 	}
// }
