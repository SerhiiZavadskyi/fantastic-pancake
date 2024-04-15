from tree_node import TreeNode

def sumNumbers(root):
    def dfs(node, sum):
        if not node:
            return 0

        sum = 10 * sum + node.val

        if not node.left and not node.right:
            return sum

        return dfs(node.left, sum) + dfs(node.right, sum)

    return dfs(root, 0)


root = TreeNode(1, TreeNode(2),TreeNode(3))
print(sumNumbers(root))