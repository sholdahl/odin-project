const reverseString = string => {
    let reversedString = ""
    for (let index = 0; index < string.length; index++) {
        reversedString += string[string.length-1-index];
    };
    return reversedString
}

export default reverseString