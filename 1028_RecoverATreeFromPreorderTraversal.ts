import { TreeNode } from "./helpers/Tree";

function recoverFromPreorder(traversal: string): TreeNode | null {
	let i = 0;
	const stack: TreeNode[] = [];

	while (i < traversal.length) {
		let dashes = 0;

		while (i < traversal.length && traversal[i] === "-") {
			dashes++;
			i++;
		}

		let j = i;
		while (j < traversal.length && traversal[j] !== "-") {
			j++;
		}
		const val = Number(traversal.slice(i, j));
		const node = new TreeNode(val);

		while (stack.length > dashes) {
			stack.pop();
		}

		if (stack.length) {
			const parent = stack[stack.length - 1];
			if (!parent.left) {
				parent.left = node;
			} else {
				parent.right = node;
			}
		}

		stack.push(node);

		i = j;
	}

	return stack[0];
}

console.log(recoverFromPreorder("1-401--349---90--88"));
