import { TreeNode } from "../helpers/Tree"

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
	if (depth === 1) {
		const newNode = new TreeNode(val)
		newNode.left = root
		return newNode
	}

	function add(node: TreeNode | null, val: number, depth: number, curr: number): TreeNode | null {
		if (!node) {
			return null
		}

		if (curr === depth - 1 && node) {
			const left = node.left
			const right = node.right

			node.left = new TreeNode(val)
			node.right = new TreeNode(val)
			node.left.left = left
			node.right.right = right

			return node
		}

		if (node) {
			node.left = add(node.left, val, depth, curr + 1)
			node.right = add(node.right, val, depth, curr + 1)
		}

		return node
	}

	return add(root, val, depth, 1)
}

const tree = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)), new TreeNode(6, new TreeNode(5)))
console.log(addOneRow(tree, 1, 2))
