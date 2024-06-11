function same(a, b) {
    if (a.length !== b.length) {
        return false
    }
    let freqCount1 = {}
    let freqCount2 = {}

    for (let i = 0; i < a.length; i++) {
        freqCount1[a[i]] = (freqCount1[a[i]] || 0) + 1
        freqCount2[b[i]] = (freqCount2[b[i]] || 0) + 1
    }


    console.log(freqCount1, freqCount2)
    for (let key of a) {
        if (!(key ** 2 in freqCount2)) {
            return false
        }
        console.log(key ** 2, key, freqCount2[key ** 2], freqCount1[key], freqCount2[key ** 2] !== freqCount1[key])
        if (freqCount2[key ** 2] !== freqCount1[key])
            return false
    }
    return true
}

let a = [1, 3, 4, 6], b = [1, 9, 16, 25]

console.log(same(a, b))

