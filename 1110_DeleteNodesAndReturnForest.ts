import { TreeNode } from "./helpers/Tree"

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
	const resSet: Set<TreeNode | null> = new Set([root])
	const toDelete = new Set(to_delete)

	const dfs = (node: TreeNode | null): TreeNode | null => {
		if (!node) {
			return null
		}
		let res: TreeNode | null = node

		if (toDelete.has(node.val)) {
			res = null
			resSet.delete(node)

			if (node.left) {
				resSet.add(node.left)
			}
			if (node.right) {
				resSet.add(node.right)
			}
		}

		node.left = dfs(node.left)
		node.right = dfs(node.right)

		return res
	}
	dfs(root)
	return [...resSet]
}

const tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
)

console.log(delNodes(tree, [3, 5]))
