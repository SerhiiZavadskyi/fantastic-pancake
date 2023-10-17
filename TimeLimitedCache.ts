class TimeLimitedCache {
    collection = new Map()

    set(key: number, value: number, duration: number): boolean {
        const found = this.collection.has(key);

        if (found) {
            clearTimeout(this.collection.get(key).ref)
        }

        this.collection.set(key, {
            value,
            ref: setTimeout(() => { this.collection.delete(key) }, duration)
        })

        return found;
    }

    get(key: number): number {
        return this.collection.has(key) ? this.collection.get(key).value : -1
    }

    count(): number {
        return this.collection.size
    }
}


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000));// false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1

