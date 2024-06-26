import { TreeNode } from "./helpers/Tree"

function bstToGst(root: TreeNode | null): TreeNode | null {
	let currSum = 0

	function dfs(node: TreeNode | null) {
		if (!node) {
			return
		}

		if (node.right) {
			dfs(node.right)
		}
		const temp = node.val
		node.val += currSum
		currSum += temp

		if (node.left) {
			dfs(node.left)
		}
	}
	dfs(root)
	return root
}

const tree = new TreeNode(
	4,
	new TreeNode(1, new TreeNode(0), new TreeNode(2, null, new TreeNode(3))),
	new TreeNode(6, new TreeNode(5), new TreeNode(7, null, new TreeNode(8)))
)

console.log(bstToGst(tree))
