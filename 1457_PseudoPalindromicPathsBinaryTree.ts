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

function pseudoPalindromicPathsMap(root: TreeNode | null): number {
	const count = new Map();
	let odd = 0;

	const dfs = (currNode: TreeNode): number => {
		if (!currNode) return 0;

		count.set(currNode.val, (count.get(currNode.val) || 0) + 1);
		const oddChange = count.get(currNode.val) % 2 === 1 ? 1 : -1;
		odd += oddChange;

		let res: number;

		if (!currNode.left || !currNode.right) {
			res = odd <= 1 ? 1 : 0;
		} else {
			res = dfs(currNode.left) + dfs(currNode.right);
		}

		odd -= oddChange;
		count.set(currNode.val, count.get(currNode.val) - 1);

		return res;
	};

	return root ? dfs(root) : -1;
}

function pseudoPalindromicPaths(root: TreeNode | null): number {
	const count: Record<string, number> = {};
	let odd = 0;

	const dfs = (currNode: TreeNode): number => {
		if (!currNode) return 0;

		count[currNode.val] = (currNode.val ?? 0) + 1;
		const oddChange = count[currNode.val] % 2 === 1 ? 1 : -1;
		odd += oddChange;

		let res: number;

		if (!currNode.left && !currNode.right) {
			res = odd <= 1 ? 1 : 0;
		} else {
			res = dfs(currNode.left) + dfs(currNode.right);
		}

		odd -= oddChange;
		count[currNode.val] -= 1;
		console.log(count);

		return res;
	};

	return root ? dfs(root) : -1;
}

const newTreeNode = new TreeNode(
	2,
	new TreeNode(3, new TreeNode(3, null, null), new TreeNode(1, null, null)),
	new TreeNode(1, null, new TreeNode(1, null, null))
);

console.log(pseudoPalindromicPaths(newTreeNode));
