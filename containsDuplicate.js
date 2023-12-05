function containsDuplicate1(nums) {
    return [...new Set(nums)].length !== nums.length
}


function containsDuplicate2(nums) {
    const sorted = [...nums].sort()

    for (let i = 0; i < sorted.length - 1; i++) {
        const el = sorted[i];
        const next = sorted[i + 1];

        if (el === next) {
            return true
        }
    }

    return false
}

function containsDuplicate3(nums) {
    const map = new Map()

    for (const num of nums) {
        if (map.has(num)) {
            return true
        }

        map.set(num, 'leetCode')
    }

    return false
}


console.log(containsDuplicate1([1, 3, 2, 1]));
console.log(containsDuplicate2([1, 3, 2, 1]));
console.log(containsDuplicate3([1, 3, 2, 1]));