function minimumPushes(word: string): number {
    if (word.length <= 8) return word.length

    const count = new Array(26).fill(0)
    for (const c of word) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }

    count.sort((a, b) => b - a)

    let min = 0
    let distinct = 0

    count.forEach(cnt => {
        min += cnt * (1 + Math.floor(distinct / 8))
        distinct++
    })

    return min
};


console.log(minimumPushes("aabcde"));
