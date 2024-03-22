export class BSNode<T> {
	val: T;
	left: BSNode<T> | null;
	right: BSNode<T> | null;

	constructor(val: T) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree<T> {
	root: BSNode<T> | null = null;

	insert(val: T) {
		const newNode = new BSNode(val);

		if (!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;

			while (true) {
				if (val < currentNode.val) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	lookup(val: T): BSNode<T> | null {
		if (!this.root) {
			return null;
		}

		let currentNode: BSNode<T> | null = this.root;

		while (currentNode) {
			if (val < currentNode.val) {
				currentNode = currentNode.left;
			} else if (val > currentNode.val) {
				currentNode = currentNode.right;
			} else {
				return currentNode;
			}
		}

		return null;
	}

	remove(val: T) {
		if (!this.root) {
			return null;
		}

		let currentNode: BSNode<T> | null = this.root;
		let parentNode: BSNode<T> | null = null;
		while (currentNode) {
			if (val < currentNode.val) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (val > currentNode.val) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.val === val) {
				//We have a match, get to work!

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						//if parent > current val, make current left child a child of parent
						if (currentNode.val < parentNode.val) {
							parentNode.left = currentNode.left;

							//if parent < current val, make left child a right child of parent
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.val < parentNode.val) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.val < parentNode.val) {
							parentNode.left = leftmost;
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = leftmost;
						}
					}
				}
				return currentNode;
			}
		}
	}

	breadthFirstSearch(): T[] {
		let currentNode = this.root;
		const list: T[] = [];
		const queue: BSNode<T>[] = [];

		if (currentNode !== null) {
			queue.push(currentNode);
		}

		while (queue.length > 0) {
			currentNode = queue.shift()!;
			list.push(currentNode.val);

			if (currentNode.left) {
				queue.push(currentNode.left);
			}

			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		return list;
	}

	breadthFirstSearchRecursive(queue: BSNode<T>[], list: T[]): T[] {
		if (!queue.length) {
			return list;
		}

		let currentNode = queue.shift()!;
		list.push(currentNode.val);

		if (currentNode.left) {
			queue.push(currentNode.left);
		}

		if (currentNode.right) {
			queue.push(currentNode.right);
		}

		return this.breadthFirstSearchRecursive(queue, list);
	}

	dfsInOrder() {
		return traverseInOrder<T>(this.root, []);
	}

	dfsPostOrder() {
		return traversePostOrder<T>(this.root, []);
	}

	dfsPreOrder() {
		return traversePreOrder<T>(this.root, []);
	}
}

function traverseInOrder<T>(root: BSNode<T> | null, list: T[]): T[] {
	if (root?.left) {
		traverseInOrder(root.left, list);
	}

	if (root?.val) {
		list.push(root.val);
	}

	if (root?.right) {
		traverseInOrder(root.right, list);
	}

	return list;
}
function traversePostOrder<T>(root: BSNode<T> | null, list: T[]): T[] {
	if (root?.left) {
		traversePostOrder(root.left, list);
	}

	if (root?.right) {
		traversePostOrder(root.right, list);
	}

	if (root?.val) {
		list.push(root.val);
	}

	return list;
}
function traversePreOrder<T>(root: BSNode<T> | null, list: T[]): T[] {
	if (root?.val) {
		list.push(root.val);
	}

	if (root?.left) {
		traversePreOrder(root.left, list);
	}

	if (root?.right) {
		traversePreOrder(root.right, list);
	}

	return list;
}

const tree = new BinarySearchTree<number>();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log("InOrder", tree.dfsInOrder());
console.log("PostOrder", tree.dfsPostOrder());
console.log("PreOrder", tree.dfsPreOrder());
console.log("BFS", tree.breadthFirstSearch());

//console.log(traverse(tree.root));

//     9
//  4     20
//1  6  15  170

function traverse(node: BSNode<number> | null) {
	if (node) {
		const tree = { val: node.val } as any;
		tree.left = node.left === null ? null : traverse(node.left);
		tree.right = node.right === null ? null : traverse(node.right);
		return tree;
	}
	return null;
}
