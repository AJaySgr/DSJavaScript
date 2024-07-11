let insertionSort = (arr) => {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let temp = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp
    }
    return arr
}
console.log(insertionSort([21, 2, 31, 1, 4]))
//output [ 1, 2, 4, 21, 31 ]


//Closure having access of inner function to outer function

function createCart() {
    let item = 0
    return function () {
        item++
        return item
    }
}

let con = createCart()
console.log("Number of Items :", con(), con(), con(), con())


function display() {
    let greet = 'HELLO'
    function you() {
        greet = greet + ' Dear'
        return greet
    }
    return you
}


console.log(display()())

const e = 1000
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                console.log(e)
                return a + b + c + d + e

            }
        }
    }
}

let f=13
console.log(sum(1)(2)(3)(4)(null))


