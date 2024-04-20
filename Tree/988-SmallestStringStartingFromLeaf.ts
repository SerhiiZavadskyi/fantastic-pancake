import { TreeNode } from "../helpers/Tree"

function smallestFromLeaf(root: TreeNode | null): string {
	function dfs(node: TreeNode | null, curr: string): string {
		if (!node) {
			return ""
		}

		curr = String.fromCharCode(node.val + 97) + curr

		if (node.left && node.right) {
			return [dfs(node.left, curr), dfs(node.right, curr)].reduce((min, c) => (c < min ? c : min))
		}

		if (node.left) {
			return dfs(node.left, curr)
		}

		if (node.right) {
			return dfs(node.right, curr)
		}

		return curr
	}

	return dfs(root, "")
}

function smallestFromLeaf2(root: TreeNode | null): string {
	let res = "|" // "z" < "|"

	function dfs(node: TreeNode | null, curr: string) {
		if (!node) {
			return
		}

		curr = String.fromCharCode(node.val + 97) + curr

		if (!node.left && !node.right && curr < res) {
			res = curr
		}

		dfs(node.left, curr)
		dfs(node.right, curr)
	}
	dfs(root, "")
	return res
}

const tree = new TreeNode(
	25,
	new TreeNode(1, new TreeNode(1), new TreeNode(3)),
	new TreeNode(3, new TreeNode(0), new TreeNode(2))
)
console.log(smallestFromLeaf2(tree))
