/*
multiply two int arrays
[1,2,3] * [9,8,7] ===> [1,2,1,4,0,1] 

Given two integers in array format - i.e. 123 is [1,2,3], 987 is [9,8,7], return their product in array format so result is [1,2,1,4,0,1]
you shouldn’t be using .split and .join
also it should work for positive and negative ints
*/

function multiply(a, b) {
    let finalSign = a[0] < 0 ^ b[0] < 0 ? -1 : 1;
    a[0] = Math.abs(a[0])
    b[0] = Math.abs(b[0])

    let result = new Array(a.length + b.length).fill(0)

    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = b.length - 1; j >= 0; j--) {
            result[i + j + 1] = result[i + j + 1] + a[i] * b[j]
            result[i + j] = result[i + j] + Math.floor(result[i + j + 1] / 10)
            result[i + j + 1] = result[i + j + 1] % 10
        }
    }

    while (result[0] === 0) {
        result.shift()
    }

    result[0] = result[0] * finalSign

    return result

}

// //multiply([1,2,3],[9,8,7])
// //multiply([7,2,3,1],[9,8,7])
// multiply([3],[3,2])