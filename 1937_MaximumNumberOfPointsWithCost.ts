function maxPoints(points: number[][]): number {
    const ROWS = points.length
    const COLS = points[0].length
    let row = points[0]

    for (let i = 1; i < ROWS; i++) {
        const nextRow = [...points[i]]
        const left = new Array(COLS).fill(0)
        const right = new Array(COLS).fill(0)

        left[0] = row[0]

        for (let j = 1; j < COLS; j++) {
            left[j] = Math.max(row[j], left[j - 1] - 1)
        }

        right[COLS - 1] = row[COLS - 1]

        for (let j = COLS - 2; j >= 0; j--) {
            right[j] = Math.max(row[j], right[j + 1] - 1)
        }

        for (let j = 0; j < COLS; j++) {
            nextRow[j] += Math.max(left[j], right[j])
        }
        row = nextRow
    }

    return Math.max(...row)
};

console.log(maxPoints([[1, 2, 3], [1, 5, 1], [3, 1, 1]]));
