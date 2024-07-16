import { TreeNode } from "./helpers/Tree"

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
	const startPath: string[] = []
	const destPath: string[] = []

	function findPath(root: TreeNode | null, value: number, path: string[]): boolean {
		if (!root) return false
		if (root.val === value) return true

		path.push("L")
		if (findPath(root.left, value, path)) return true
		path.pop()

		path.push("R")
		if (findPath(root.right, value, path)) return true
		path.pop()

		return false
	}

	findPath(root, startValue, startPath)
	findPath(root, destValue, destPath)

	let i = 0
	while (i < startPath.length && i < destPath.length && startPath[i] === destPath[i]) {
		i++
	}

	const stepsUp = "U".repeat(startPath.length - i)
	const stepsDown = destPath.slice(i).join("")

	return stepsUp + stepsDown
}
