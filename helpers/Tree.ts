export class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

export class BinarySearchTree {
	root: TreeNode | null = null

	insert(val: number) {
		const newNode = new TreeNode(val)

		if (!this.root) {
			this.root = newNode
		} else {
			let currentNode = this.root

			while (true) {
				if (val < currentNode.val) {
					if (!currentNode.left) {
						currentNode.left = newNode
						return this
					}
					currentNode = currentNode.left
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode
						return this
					}
					currentNode = currentNode.right
				}
			}
		}
	}
	lookup(val: number): TreeNode | null {
		if (!this.root) {
			return null
		}

		let currentNode: TreeNode | null = this.root

		while (currentNode) {
			if (val < currentNode.val) {
				currentNode = currentNode.left
			} else if (val > currentNode.val) {
				currentNode = currentNode.right
			} else {
				return currentNode
			}
		}

		return null
	}

	remove(val: number) {
		if (!this.root) {
			return null
		}

		let currentNode: TreeNode | null = this.root
		let parentNode: TreeNode | null = null
		while (currentNode) {
			if (val < currentNode.val) {
				parentNode = currentNode
				currentNode = currentNode.left
			} else if (val > currentNode.val) {
				parentNode = currentNode
				currentNode = currentNode.right
			} else if (currentNode.val === val) {
				//We have a match, get to work!

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left
					} else {
						//if parent > current val, make current left child a child of parent
						if (currentNode.val < parentNode.val) {
							parentNode.left = currentNode.left

							//if parent < current val, make left child a right child of parent
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = currentNode.left
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left
					if (parentNode === null) {
						this.root = currentNode.right
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.val < parentNode.val) {
							parentNode.left = currentNode.right

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = currentNode.right
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left
					let leftmostParent = currentNode.right
					while (leftmost.left !== null) {
						leftmostParent = leftmost
						leftmost = leftmost.left
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right
					leftmost.left = currentNode.left
					leftmost.right = currentNode.right

					if (parentNode === null) {
						this.root = leftmost
					} else {
						if (currentNode.val < parentNode.val) {
							parentNode.left = leftmost
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = leftmost
						}
					}
				}
				return currentNode
			}
		}
	}

	breadthFirstSearch(): number[] {
		let currentNode = this.root
		const list: number[] = []
		const queue: TreeNode[] = []

		if (currentNode !== null) {
			queue.push(currentNode)
		}

		while (queue.length > 0) {
			currentNode = queue.shift()!
			list.push(currentNode.val)

			if (currentNode.left) {
				queue.push(currentNode.left)
			}

			if (currentNode.right) {
				queue.push(currentNode.right)
			}
		}

		return list
	}

	breadthFirstSearchRecursive(queue: TreeNode[], list: number[]): number[] {
		if (!queue.length) {
			return list
		}

		let currentNode = queue.shift()!
		list.push(currentNode.val)

		if (currentNode.left) {
			queue.push(currentNode.left)
		}

		if (currentNode.right) {
			queue.push(currentNode.right)
		}

		return this.breadthFirstSearchRecursive(queue, list)
	}

	dfsInOrder() {
		return traverseInOrder(this.root, [])
	}

	dfsPostOrder() {
		return traversePostOrder(this.root, [])
	}

	dfsPreOrder() {
		return traversePreOrder(this.root, [])
	}
}

function traverseInOrder(root: TreeNode | null, list: number[]): number[] {
	if (root?.left) {
		traverseInOrder(root.left, list)
	}

	if (root?.val) {
		list.push(root.val)
	}

	if (root?.right) {
		traverseInOrder(root.right, list)
	}

	return list
}
function traversePostOrder(root: TreeNode | null, list: number[]): number[] {
	if (root?.left) {
		traversePostOrder(root.left, list)
	}

	if (root?.right) {
		traversePostOrder(root.right, list)
	}

	if (root?.val) {
		list.push(root.val)
	}

	return list
}
function traversePreOrder(root: TreeNode | null, list: number[]): number[] {
	if (root?.val) {
		list.push(root.val)
	}

	if (root?.left) {
		traversePreOrder(root.left, list)
	}

	if (root?.right) {
		traversePreOrder(root.right, list)
	}

	return list
}

// const tree = new BinarySearchTree()
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)

// console.log("InOrder", tree.dfsInOrder())
// console.log("PostOrder", tree.dfsPostOrder())
// console.log("PreOrder", tree.dfsPreOrder())
// console.log("BFS", tree.breadthFirstSearch())

// console.log(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node: TreeNode | null) {
	if (node) {
		const tree = { val: node.val } as any
		tree.left = node.left === null ? null : traverse(node.left)
		tree.right = node.right === null ? null : traverse(node.right)
		return tree
	}
	return null
}
