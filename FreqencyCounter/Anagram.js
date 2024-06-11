function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    const lookup = {}
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter]--
        }
    }
    return true

}


let str1 = 'cinema', str2 = 'iceman'
console.log('Output', checkAnagram(str1, str2))
console.log('Output', checkAnagram('Moon', 'Noon'))
console.log('Output', checkAnagram('console', 'noscole'))