const img = document.querySelector("img");
const search = document.querySelector("#search");
const refresh = document.querySelector("#refresh");
let searchWord = "cats"

let loadImage = async () => {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=XkReDDYMtEDQTYO7TsE7pKXESV19nJs3&s=' + searchWord, { mode: 'cors' });
        const imgData = await response.json();
        img.src = imgData.data.images.original.url
    } catch (error) {
        console.log(error);
        alert("Try a different search term")
    }
}
loadImage();

let changeSearchWord = () => {
    searchWord = document.querySelector("input").value
    loadImage()
}

let handleKeypress = (e) => {
    if (e.key == "Enter") {
        changeSearchWord()
    }
}


refresh.addEventListener("click", loadImage)
search.addEventListener("click", changeSearchWord)
window.addEventListener("keypress", handleKeypress)

