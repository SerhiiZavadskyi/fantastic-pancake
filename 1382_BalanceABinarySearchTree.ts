import { TreeNode } from "./helpers/Tree"

function balanceBST(root: TreeNode | null): TreeNode | null {
	const nodes: TreeNode[] = []

	function inorder(node: TreeNode | null) {
		if (!node) return
		inorder(node.left)
		nodes.push(node)
		inorder(node.right)
	}

	inorder(root)

	function buildBalancedBST(start: number, end: number): TreeNode | null {
		if (start > end) return null
		const mid = Math.floor((start + end) / 2)
		const node = nodes[mid]
		node.left = buildBalancedBST(start, mid - 1)
		node.right = buildBalancedBST(mid + 1, end)
		return node
	}

	return buildBalancedBST(0, nodes.length - 1)
}

const tree = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))))

console.log(balanceBST(tree))
