function diagonalSum(mat: number[][]): number {
    let mainDiagonalSum = 0
    let secondaryDiagonalSum = 0

    for (let i = 0; i < mat.length; i++) {
        const lastIdx = mat.length - 1 - i

        mainDiagonalSum += mat[i][i];

        if (i !== lastIdx) {
            secondaryDiagonalSum += mat[i][lastIdx];
        }
    }

    return mainDiagonalSum + secondaryDiagonalSum
};

const mat = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

const mat1 = [[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]

console.log(diagonalSum(mat));
console.log(diagonalSum(mat1));
