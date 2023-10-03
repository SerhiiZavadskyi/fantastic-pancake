class HashTable<V>{
    private data

    constructor(private size: number) {
        this.data = new Array(size)
    }

    private hash(key: string) {
        let hash = 0

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }

        return hash
    }

    set(key: string, value: V) {
        let address = this.hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])

        return this.data
    }

    get(key: string) {
        let address = this.hash(key)
        const currentBucket = this.data[address]

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
    }

    keys(): string[] {
        const keysArray = []

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }

        return keysArray
    }
}

function firstRecurringCharacter<T>(arr: T[]) {
    const hash = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (!hash.has(arr[i])) {
            hash.set(arr[i], arr[i])
        } else {
            return arr[i]
        }
    }
}
