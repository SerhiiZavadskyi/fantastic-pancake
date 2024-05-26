import { TreeNode } from "./TreeNode";

function diameterOfBinaryTree(root: TreeNode | null): number {
	let diameter = 0;

	function dfs(node: TreeNode | null): number {
		if (!node) return 0;

		const left = dfs(node.left);
		const right = dfs(node.right);
		diameter = Math.max(diameter, left + right);

		return 1 + Math.max(left, right);
	}
	dfs(root);
	return diameter;
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const tree1 = new TreeNode(1);

console.log(diameterOfBinaryTree(tree));
console.log(diameterOfBinaryTree(tree1));
