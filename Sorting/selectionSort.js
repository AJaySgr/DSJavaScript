function selectionSOort(arr){
    if (arr.length < 1) return -1

    const swap = (arr, index1, index2) => ([arr[index2], arr[index1]] = [arr[index1], arr[index2]])
    
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        swap(arr, i, min)
    }
    return arr
}
 let arr = [12, 123, 1, 9, 3, 9, 4, 5, 6, 7]
console.log(selectionSOort(arr))
/*
output 
[
  1, 3, 4,  5,   6,
  7, 9, 9, 12, 123 
]
*/