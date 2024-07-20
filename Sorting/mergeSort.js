// Sorting Algo (MERGE SORT)
function mergeSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  else {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.splice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let res = [];
  let lIndex = 0,
    rIndex = 0;
  let lenLeft = left.length;
  let lenRight = right.length;

  while (lIndex < lenLeft && rIndex < lenRight) {
    if (left[lIndex] < right[rIndex]) {
      res.push(left[lIndex++]);
    } else {
      res.push(right[rIndex++]);
    }
  }
  return res.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}

// We will take an Array
const arr = [6, 2, 1, 1, 1];

// We will sort this array
let sortedArray = mergeSort(arr);

console.log(sortedArray);

//Output
//[ 1, 1, 1, 2, 6 ]
