// For now, just write each function and test the output with console.log.

// 1) Write a function called add7 that takes one number and returns that number + 7.

function add7(num) {
    return num + 7
}
console.log(add7(3))
document.getElementById("question1").innerHTML = "The answer to 3 + 7 is: " + add7(3)  
// 2) Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(2,2))
document.getElementById("question2").innerHTML = "The answer to 2 * 2 is: " + multiply(2,2) 
// 3) Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. 
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}
console.log(capitalize("lorem IPSUM"))
document.getElementById("question3").innerHTML = "This text is capitalized " + capitalize("lorem IPSUM")
// 4) Write a function called lastLetter that takes a string and returns the very last letter of that string:
//    a) lastLetter("abcd") should return "d"
function lastLetter(string) {
    return string.charAt(string.length -1)
}
console.log(lastLetter("abcd"))
document.getElementById("question4").innerHTML = "Last letter of the input string is: " + lastLetter("abcd")