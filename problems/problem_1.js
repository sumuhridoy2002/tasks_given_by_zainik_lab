/* Problem 1: Get the length of the last word of a given sentence. */

function lengthOfLastWord(str){
    if(str.length <= 0) return "No word found!"
    else if(str.length >= 105) return "Sentence length should not be more than 104 character."

    let length = 0
    str.split('').forEach(i => {
        i == ' ' ? length = 0 : length++
    })
    return length
}

// let s = "Hello World"
// let s = " fly me to the moon "
// let s = "luffy is still joyboy"
// let s = "         "
let s = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

module.exports = lengthOfLastWord(s.trim())