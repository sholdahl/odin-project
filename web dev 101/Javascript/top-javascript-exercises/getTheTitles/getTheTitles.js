const getTheTitles = function(array) {
    list = []
    array.forEach(obj => {
        list.push(obj.title)
    });
    return list;
}

module.exports = getTheTitles;
