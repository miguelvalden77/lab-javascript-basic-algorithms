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

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, possimus qui dignissimos tempore vel dolore odio deserunt fugiat rem, autem laboriosam sapiente dicta eligendi nihil? Explicabo quod debitis praesentium perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, possimus qui dignissimos tempore vel dolore odio deserunt fugiat rem, autem laboriosam sapiente dicta eligendi nihil? Explicabo quod debitis praesentium perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, possimus qui dignissimos tempore vel dolore odio deserunt fugiat rem, autem laboriosam sapiente dicta eligendi nihil? Explicabo quod debitis praesentium perspiciatis."

let loremArray = lorem.split(" ")

console.log(loremArray.length)

let counter = 0
for(let i = 0; i < lorem.length; i++){

    if(lorem[i] === "e" && lorem[i + 1] === "t"){
        counter ++
    }

}

console.log(counter)


let phraseTocheck = "race car"

let palíndromo = (string) => {
    let phraseRevés = phraseTocheck.split(" ").join("")
    let phraseRevés_2 = phraseRevés.split("").reverse().join("")

    let phraseBien = string.split(" ").join("")

    if(phraseBien === phraseRevés_2){
        return "Es un palindromo"
    } else{
        return "No es un palindromo"
    }
}


console.log(palíndromo(phraseTocheck))


