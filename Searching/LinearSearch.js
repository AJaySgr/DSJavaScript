//Linear search 
function linearSearch(arr, el) {
    if (arr.length === 0 || arr.length === 1) return arr
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) return i
    }
    return -1
}

let arr = [12, 123, 1, 9, 3, 9, 4, 5, 6, 7]
let elementToFind = 5
console.log(linearSearch(arr, elementToFind))
//Output 7
