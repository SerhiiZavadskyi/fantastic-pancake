import { TreeNode } from "../helpers/Tree"
function evaluateTree(root: TreeNode | null): boolean {
	if (root && !root.left) {
		return root.val === 1
	}

	if (root && root.val === 2) {
		return evaluateTree(root.left) || evaluateTree(root.left)
	}

	if (root && root.val === 3) {
		return evaluateTree(root.left) && evaluateTree(root.left)
	}

	return false
}

function evaluateTree2(root: TreeNode | null): boolean {
	const stack: (TreeNode | null)[] = [root]
	const map = new Map()

	while (stack.length) {
		const node = stack.pop()!

		if (!node.left) {
			map.set(node, node.val === 1)
		} else {
			if (map.has(node.left)) {
				if (node.val === 2) {
					map.set(node, map.get(node.left) || map.get(node.right))
				}
				if (node.val === 3) {
					map.set(node, map.get(node.left) && map.get(node.right))
				}
			} else {
				stack.push(node)
				stack.push(node.left)
				stack.push(node.right)
			}
		}
	}

	return map.get(root)
}

const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3, new TreeNode(0), new TreeNode(1)))

console.log(evaluateTree2(tree))
