const caesar = function (string, shift) {
    let decoded = ""
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (i = 0; i < string.length; i++) {
        if (!/[a-zA-Z]/.test(string[i])) {
            decoded = decoded.concat(string[i])
        } else {
            let startingLetter = alphabet.indexOf(string[i].toLowerCase());
            let finalLetter = startingLetter + shift;
            if(finalLetter > 25) {
                multiplier = Math.floor(finalLetter/25)
                finalLetter = finalLetter - 26 * multiplier;
            } else if(finalLetter < 0){
                multiplier = Math.ceil(finalLetter/-26)
                finalLetter = finalLetter + 26 * multiplier;
            }
            if (string[i] == string[i].toUpperCase()) {
                decoded = decoded.concat(alphabet[finalLetter].toUpperCase());
            } else {
                decoded = decoded.concat(alphabet[finalLetter]);
            }
        }
    }
    return decoded;
}

module.exports = caesar
