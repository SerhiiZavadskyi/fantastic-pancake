import { TreeNode } from "./helpers/Tree"

function createBinaryTree(descriptions: number[][]): TreeNode | null {
	const nodes: Record<number, TreeNode> = {}
	const children = new Set()

	for (const [parent, child, isLeft] of descriptions) {
		children.add(child)

		if (nodes[parent] === undefined) {
			nodes[parent] = new TreeNode(parent)
		}

		if (nodes[child] === undefined) {
			nodes[child] = new TreeNode(child)
		}

		if (isLeft) {
			nodes[parent].left = nodes[child]
		} else {
			nodes[parent].right = nodes[child]
		}
	}

	for (const [parent] of descriptions) {
		if (!children.has(parent)) {
			return nodes[parent]
		}
	}

	return null
}

console.log(
	createBinaryTree([
		[20, 15, 1],
		[20, 17, 0],
		[50, 20, 1],
		[50, 80, 0],
		[80, 19, 1],
	])
)
