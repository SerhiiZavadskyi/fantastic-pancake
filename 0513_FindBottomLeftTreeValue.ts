import { TreeNode } from "./TreeNode";

function findBottomLeftValue(root: TreeNode | null): number {
	const queue = [root];
	let result: number = -1;

	while (queue.length > 0) {
		const node = queue.pop()!;
		result = node.val;

		if (node?.right) queue.unshift(node.right);
		if (node?.left) queue.unshift(node.left);
	}

	return result;
}

const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));

console.log(findBottomLeftValue(tree));
