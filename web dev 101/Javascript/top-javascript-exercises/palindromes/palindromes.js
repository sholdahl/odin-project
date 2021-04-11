const palindromes = function(string) {
    let newString = string.replace(/[^\w\s]|_/g, "").replace(/ /g, "").toLowerCase();
    let b = 0;
    let e = newString.length -1;
    let loops = Math.floor(newString.length /2);
    console.log(newString);
    result = true
    for(i=loops; i > 0; i--) {
        if(newString[e] == newString[b]) {
            result = true
        } else {
            result = false;
            break;
        }
        e--;
        b++;
    }
    return result;
}

module.exports = palindromes
