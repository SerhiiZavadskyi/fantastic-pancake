class MyHashSet {
    private items: Record<number, number>
    constructor() {
        this.items = {}
    }

    add(key: number): void {
        this.items[key] = key
    }

    remove(key: number): void {
        if (this.contains(key)) {
            delete this.items[key];
        }
    }

    contains(key: number): boolean {
        return this.items.hasOwnProperty(key)
    }
}

const myHashSet = new MyHashSet();
console.log(myHashSet.add(1))      // set = [1]
console.log(myHashSet.add(2))      // set = [1, 2]
console.log(myHashSet.contains(1)) // return True
console.log(myHashSet.contains(3)) // return False, (not found)
console.log(myHashSet.add(2))      // set = [1, 2]
console.log(myHashSet.contains(2)) // return True
console.log(myHashSet.remove(2))   // set = [1]
console.log(myHashSet.contains(2)) // return False, (already removed)