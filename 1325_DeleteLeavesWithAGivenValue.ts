import { TreeNode } from "./helpers/Tree"

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
	if (!root) return null

	root.left = removeLeafNodes(root.left, target)
	root.right = removeLeafNodes(root.right, target)

	if (!root.left && !root.right && root.val === target) {
		return null
	}

	return root
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(2)), new TreeNode(3, new TreeNode(2), new TreeNode(4)))

console.log(removeLeafNodes(tree, 2))
