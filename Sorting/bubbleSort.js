
function bubbleSort(arr) {
    let isSwap
    if (arr.length < 1) return -1
    const swap = (arr, index1, index2) => ([arr[index2], arr[index1]] = [arr[index1], arr[index2]])
    for (let i = arr.length; i > 0; i--) {
        isSwap=true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                isSwap=false
                console.log(arr,j,j+1)
            }
            if(isSwap) break

        }
    }

    return arr
}

let arr = [12, 1, 5, 5, 2]
console.log(bubbleSort(arr))

//output before IsSwap
/*
[ 1, 12, 5, 5, 2 ] 0 1
[ 1, 5, 12, 5, 2 ] 1 2
[ 1, 5, 5, 12, 2 ] 2 3
[ 1, 5, 5, 2, 12 ] 3 4
[ 1, 5, 2, 5, 12 ] 2 3
[ 1, 2, 5, 5, 12 ] 1 2
S   orted Array :[ 1, 2, 5, 5, 12 ]
 */

//AFTER isSwap [Optimized sol]
/*
[ 1, 12, 5, 5, 2 ] 0 1
[ 1, 5, 12, 5, 2 ] 1 2
[ 1, 5, 5, 12, 2 ] 2 3
[ 1, 5, 5, 2, 12 ] 3 4 
Sorted Array :[ 1, 2, 5, 5, 12 ]
 */
