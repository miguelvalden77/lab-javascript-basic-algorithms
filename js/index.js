// Iteration 1: Names and Input
let hacker1 = "Miguel"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "José"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let driverName = hacker1.length
let navigatorName = hacker2.length

if(driverName > navigatorName){
    console.log(`The driver has the longest name, it has ${driverName} characters`) 
} else if(navigatorName > driverName){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${driverName} characters!`)
}

// Iteration 3: Loops
let driverUpper = hacker1.toUpperCase()

for(let char of driverUpper){
    console.log(char)
}

for(let i = navigatorName - 1; i >= 0 ; i--){
console.log(hacker2[i])
}


if(hacker2 > hacker1){
    console.log(`The driver's name goes first`)
} else if(hacker2 < hacker1){
    console.log(`The navigator's name goes first`)
} else {
    console.log("What?! You both have the same name?")
}


