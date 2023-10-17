// 2721. Execute Asynchronous Functions in Parallel
type Func = () => Promise<any>

function promiseAll(functions: Func[]): Promise<any> {
    return new Promise((resolve, reject) => {
        let result: number[] = []
        let resolvedCount = 0

        functions.forEach((func, i) => {
            func()
                .then(val => {
                    result[i] = val
                    resolvedCount++

                    if (resolvedCount === functions.length) {
                        resolve(result)
                    }
                })
                .catch(reject)
        })
    })
};

const promise = promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
])
promise.then(console.log); // [42]