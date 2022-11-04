/* Problem 2: Convert number into roman number. */

function convert(num) {
    if(num < 1 || num > 3999) return "Number should follow the range: 1 to 3999"
    let codes = [
      [1000, "M"], [900, "CM"], [800, "DCCC"], [700, "DCC"], [600, "DC"],
      [500, "D"], [400, "CD"], [300, "CCC"], [200, "CC"], 
      [100, "C"], [90, "XC"], [80, "LXXX"], [70, "LXX"], [60, "LX"], 
      [50, "L"], [40, "XL"], [30, "XXX"], [20, "XX"], 
      [10, "X"], [9, "IX"], [8, "VIII"], [7, "VII"], [6, "VI"], 
      [5, "V"], [4, "IV"], [3, "III"], [2, "II"], [1, "I"]
    ]
  
    let roman = ""
    for(let i = 0; i < codes.length; i++) {
      while(num >= codes[i][0]) {
        roman += codes[i][1]
        num -= codes[i][0]
      }
    }
    return roman
}

// let number = 3
// let number = 58
// let number = 1994
let number = 3999

module.exports = convert(number)