import { TreeNode } from "./TreeNode";

function isEvenOddTree(root: TreeNode | null): boolean {
	let queue = [root];
	let isEven = true;

	while (queue.length > 0) {
		const size = queue.length;
		let prev = isEven ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

		for (let i = 0; i < size; i++) {
			const node = queue.shift()!;

			if (isEven && (node.val % 2 === 0 || node.val <= prev)) {
				return false;
			} else if (!isEven && (node.val % 2 === 1 || node.val >= prev)) {
				return false;
			}

			if (node?.left) queue.push(node.left);
			if (node?.right) queue.push(node.right);

			prev = node.val;
		}

		isEven = !isEven;
	}

	return true;
}

const tree = new TreeNode(
	1,
	new TreeNode(10, new TreeNode(3, new TreeNode(12), new TreeNode(8)), null),
	new TreeNode(4, new TreeNode(7, new TreeNode(6), null), new TreeNode(9, null, new TreeNode(2)))
);

const tree2 = new TreeNode(1, new TreeNode(10), new TreeNode(4));

console.log(isEvenOddTree(tree));
console.log(isEvenOddTree(tree2));
