class CustomArray<T> {
    private length: number = 0
    private data: Record<number, T> = {}

    get(idx: number): T {
        return this.data[idx]
    }

    push(item: T): number {
        this.data[this.length] = item
        this.length++

        return this.length
    }

    pop(): T {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(idx: number) {
        const item = this.data[idx]
        this.shiftItems(idx)
        return item
    }

    private shiftItems(idx: number) {
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    getAllItems() {
        return this.data
    }

    get arrLength(): number {
        return this.length
    }
}

function mergeSortedArray(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1
    let j = 1

    if (arr1.length === 0) {
        return arr2
    }

    if (arr2.length === 0) {
        return arr1
    }

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item)
            arr1Item = arr1[i]
            i++
        } else {
            mergedArray.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }

    return mergedArray
}
