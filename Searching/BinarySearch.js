//Binary Search
/**
 * PseudoCode
 * Required only Sorted Array
 * Create the pointers start and Start will be intial point of Array and end will end of array
 *   i.e start=0, end=arr.length-1
 * Now loop until start and end while(start<=end)
 * Now set mid
 *      if element found then return index
 *      if element is too large then move end+1
 *      if element is too small then move start+1          
 * if element is not found then return -1
 * 

 * @param {*} arr 
 * @param {*} element 
 * @returns 
 */
function binarySearch(arr, element) {
    if (arr.length === 0 || arr.length === 1) return arr  // Return array if array length is 0 or 1
    let start = 0 // start point of Array
    let end = arr.length - 1  // end point of array
    let mid = Math.floor((start + end) / 2) // setting the mid of an array
    while (arr[mid] !== element && start <= end) { //loop continue untill we will find the element or we wont reached at then end of array
        if (arr[mid] < element) start = mid + 1
        else end = mid - 1
        mid = Math.floor((start + end) / 2)
    }
    return arr[mid] === element ? mid : -1  //if we found the element then we will return index of an array or we will return -1 
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 10))