function flat(arr, n) {
    if (n === 0) return arr

    const result = []

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flat(item, n - 1))
        } else {
            result.push(item)
        }
    }

    return result
}

console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));
