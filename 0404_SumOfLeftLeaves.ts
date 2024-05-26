import { TreeNode } from "./helpers/Tree"

function sumOfLeftLeaves(root: TreeNode | null): number {
	function dfs(node: TreeNode | null, isLeft: boolean): number {
		if (!node) {
			return 0
		}

		if (!node.left && !node.right && isLeft) {
			return node.val
		}

		return dfs(node.left, true) + dfs(node.right, false)
	}

	return dfs(root, false)
}

function sumOfLeftLeaves2(root: TreeNode | null): number {
	let res = 0
	const stack = [{ root, isLeft: false }]

	while (stack.length) {
		const { root, isLeft } = stack.pop()!

		if (isLeft && root && !root?.left && !root?.right) {
			res += root.val
		}

		if (root?.left) {
			stack.push({ root: root.left, isLeft: true })
		}

		if (root?.right) {
			stack.push({ root: root.right, isLeft: false })
		}
	}

	return res
}

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

console.log(sumOfLeftLeaves2(tree))
