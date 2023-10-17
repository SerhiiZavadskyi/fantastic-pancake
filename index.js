// function cancelableCount(timeout) {
//     let count = 0
//     const interval = setInterval(() => {
//         console.log(++count);
//     }, timeout);


//     return () => clearInterval(interval)

// }

// const stop = cancelableCount(1000)

// setTimeout(() => {
//     stop()
// }, 5100)

Array.prototype.groupBy = function (fn) {

    return this.reduce((acc, item) => {
        const key = fn(item)
        acc[key] = acc[key] ? [...acc[key], item] : [item]

        return acc
    }, {})
};
const array = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
]
