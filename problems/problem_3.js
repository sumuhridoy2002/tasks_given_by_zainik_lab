/* Problem 3: Is Kangaroo can meet together or not? */

function isMeet(x1, v1, x2, v2) {
    if((x1 < 0 || x1 > x2) || (x2 > 10000)) return "Value of x1 or x1 is not correct !"
    if((v1 < 1 || v1 > 10000) || (v2 < 1 || v2 > 10000)) return "Value of v1 or v1 is not correct !"

    let result = "NO"
        for(let i = 0; i < 10000; i++){
            if((x1 + (v1 * i)) == (x2 + (v2 * i))){
                result = "YES"
            }
        }
    return result
}

// const x1 = 0
// const v1 = 3
// const x2 = 4
// const v2 = 2
const x1 = 0
const v1 = 2
const x2 = 5
const v2 = 3

module.exports = isMeet(x1, v1, x2, v2)