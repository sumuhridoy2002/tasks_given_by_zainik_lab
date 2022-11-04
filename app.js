const readline = require('readline')

const problem_1 = require("./problems/problem_1")
const problem_2 = require("./problems/problem_2")
const problem_3 = require("./problems/problem_3")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log(
    `
    List of the tasks/problems given to solve:
    1) Get the length of the last word of a given sentence.
    2) Convert number into roman number.
    3) Is Kangaroo can meet together or not?
    # Press the serial number (Example: 3) to open the solution.
    `
)

rl.question('Which solution you want to open? ', function (solutionNumber) {
    if(solutionNumber == 1) console.log(problem_1)
    else if(solutionNumber == 2) console.log(problem_2)
    else if(solutionNumber == 3) console.log(problem_3)
    rl.close()
})
  
rl.on('close', function () {
    console.log('\nBYE BYE !!!')
    process.exit(0)
})