
const reverseWord = (str: string): string => [...str].reverse().join('')

function reverseWords(s: string): any {
    return s.split(' ').map(reverseWord).join(' ')
};

function reverseStr1(s: string, k: number): string {
    const str: string[] = []

    for (let i = 0; i < s.length; i = i + k) {
        str.push(s.slice(i, i + k));
    }

    return str.map((s, i) => i % 2 === 0 ? [...s].reverse().join('') : s).join('')
}

function reverseStr2(s: string, k: number): string {
    let str: string = ''
    let j = 0

    for (let i = 0; i < s.length; i = i + k) {
        const subStr = s.slice(i, i + k)

        if (j % 2 === 0) {
            str += reverseWord(subStr)
        } else {
            str += subStr
        }

        j++
    }

    return str
};


console.log(reverseStr1('abcdefg', 2));
console.log(reverseStr2('abcdefg', 2));

