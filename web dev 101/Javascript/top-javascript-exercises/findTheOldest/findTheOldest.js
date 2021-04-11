let findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        if(!current.yearOfDeath) {
            current.yearOfDeath = new Date().getFullYear();
        }
        let age = current.yearOfDeath - current.yearOfBirth;
        if(age > (oldest.yearOfDeath - oldest.yearOfBirth)){
            return current
        } else{
            return oldest
        }
    },{yearOfDeath: 0, yearOfBirth: 0})
}

module.exports = findTheOldest
