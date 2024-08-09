function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    const diraction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const res: number[][] = []
    let r = rStart, c = cStart, steps = 1, i = 0

    while (res.length < rows * cols) {
        for (let k = 0; k < 2; k++) {
            const [dr, dc] = diraction[i]

            for (let j = 0; j < steps; j++) {
                if ((0 <= r && r < rows) && (0 <= c && c < cols)) {
                    res.push([r, c])
                }

                r += dr
                c += dc
            }

            i = (i + 1) % 4
        }

        steps++
    }

    return res
};

console.log(spiralMatrixIII(5, 6, 1, 4));
