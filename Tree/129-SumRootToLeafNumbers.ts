import { TreeNode } from "../helpers/Tree"

function sumNumbers(root: TreeNode | null): number {
	function dfs(node: TreeNode | null, sum: number): number {
		if (!node) {
			return 0
		}

		sum = 10 * sum + node.val

		if (!node.left && !node.right) {
			return sum
		}

		return dfs(node.left, sum) + dfs(node.right, sum)
	}

	return dfs(root, 0)
}

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))

console.log(sumNumbers(tree))
