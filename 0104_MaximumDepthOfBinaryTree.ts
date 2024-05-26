class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

//dfs
function maxDepth(root: TreeNode | null): number {
	if (!root) return 0;

	return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
}

//Iterative DFS
function maxDepth2(root: TreeNode | null): number {
	if (!root) return 0;

	const stack: [TreeNode, number][] = [[root, 1]];
	let res = 1;
	while (stack.length) {
		const popped = stack.pop();
		let node, depth;
		if (popped) {
			node = popped[0];
			depth = popped[1];
		}
		if (node) {
			res = Math.max(res, depth);
			stack.push([node.left, depth + 1]);
			stack.push([node.right, depth + 1]);
		}
	}

	return res;
}
