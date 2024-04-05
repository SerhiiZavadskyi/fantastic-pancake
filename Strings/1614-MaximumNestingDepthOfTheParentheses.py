def maxDepth(s):
    res = 0
    count = 0

    for char in s:
        if char == "(":
            count += 1
        elif char == ")":
            count -= 1

        res = max(res, count)

    return res