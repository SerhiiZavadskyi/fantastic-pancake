function kthDistinct(arr: string[], k: number): string {
    const count = new Map<string, number>()

    arr.forEach(s => count.set(s, (count.get(s) ?? 0) + 1))
    const distinct: string[] = [...count]
        .filter(s => s[1] === 1)
        .map(s => s[0])

    return distinct.length < k ? "" : distinct[k - 1]
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));


function kthDistinct2(arr: string[], k: number): string {
    const count = new Map<string, number>()

    arr.forEach(s => count.set(s, (count.get(s) ?? 0) + 1))

    for (const [str, cnt] of count) {
        if (cnt == 1) {
            k--
        }

        if (k === 0) {
            return str
        }
    }

    return ""
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));