// Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)

        if (charCode !== str.charCodeAt(0) + i) {
            return String.fromCharCode(charCode - 1)
        }
    }

}

console.log(fearNotLetter("stvwx"));

function fearNotLetter2(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const start = alphabet.indexOf(str[0])
    const strSlice = alphabet.slice(start, start + str.length)

    for (let i = 0; i < strSlice.length; i++) {
        if (strSlice[i] !== str[i]) {
            return strSlice[i]
        }
    }

}
