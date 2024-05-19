import { TreeNode } from "../helpers/Tree"

function distributeCoins(root: TreeNode | null): number {
	let res = 0

	const dfs = (node: TreeNode | null): number => {
		if (!node) {
			return 0
		}

		const left = dfs(node.left)
		const right = dfs(node.right)

		res += Math.abs(left) + Math.abs(right)
		return node.val + left + right - 1
	}
	dfs(root)

	return res
}

const tree = new TreeNode(0, new TreeNode(3), new TreeNode(0))
console.log(distributeCoins(tree))
