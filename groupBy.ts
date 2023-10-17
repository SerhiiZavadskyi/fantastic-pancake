declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn) {
    return this.reduce((group, item) => {
        const key = fn(item)

        if (!group[key]) {
            group[key] = []
        }

        group[key].push(item);

        return group
    }, {})
}

console.log([1, 2, 3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]})
