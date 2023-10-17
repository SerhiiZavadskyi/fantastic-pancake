function numIdenticalPairs(nums: number[]): number {
    let pairCount = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                pairCount++
            }
        }
    }

    return pairCount
};

const a = [1, 2, 3, 1, 1, 3] // 4
// const a = [1, 1, 1, 1] // 6
