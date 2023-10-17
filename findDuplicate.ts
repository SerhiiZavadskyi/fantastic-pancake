function findDuplicate(nums: number[]): number {
    const cache = {}

    for (let num of nums) {
        const key = num.toString()

        if (cache[key] !== undefined) {
            return num
        }

        cache[key] = num
    }

    return -1
};

console.log(findDuplicate([1, 3, 4, 4, 4, 2, 2]));
