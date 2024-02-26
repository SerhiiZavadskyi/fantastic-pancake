import { TreeNode } from "./TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (!p && !q) return true;
	if (!p || !q) return false;

	return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));

console.log(isSameTree(p, q));
