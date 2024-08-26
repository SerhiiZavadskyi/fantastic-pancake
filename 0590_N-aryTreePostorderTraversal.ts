class _Node {
	val: number
	children: _Node[]
	constructor(val?: number) {
		this.val = val === undefined ? 0 : val
		this.children = []
	}
}

function postorder(root: _Node | null): number[] {
	const list: number[] = []

	const dfs = (node: _Node | null) => {
		if (!node) return

		for (const x of node.children) {
			dfs(x)
		}
		list.push(node.val)
	}
	dfs(root)

	return list
}
