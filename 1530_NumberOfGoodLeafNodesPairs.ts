import { TreeNode } from "./helpers/Tree"

function countPairs(root: TreeNode | null, distance: number): number {
	let pairs = 0

	const dfs = (node: TreeNode | null): number[] => {
		if (!node) {
			return []
		}
		if (!node.left && !node.right) {
			return [1]
		}

		const leftDist = dfs(node.left)
		const rightDist = dfs(node.right)

		for (const d1 of leftDist) {
			for (const d2 of rightDist) {
				if (d1 + d2 <= distance) {
					pairs++
				}
			}
		}

		return leftDist.concat(rightDist).map((d) => d + 1)
	}
	dfs(root)

	return pairs
}

const tree = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3))

console.log(countPairs(tree, 3))
