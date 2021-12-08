async function randomGiphy() {
    const res = await axios.get('https://api.giphy.com/v1/gifs/random', {params:{api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', limit: 1}});
    console.log('random res', res);
    const gif = res.data.data.images.fixed_height;
    appendGiphy(gif.url);
}

async function searchGiphy(q) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: new Params(q)});
    console.log('search res', res);
    const gif = res.data.data[0].images.fixed_height;
    appendGiphy(gif.url);
}

class Params {
    constructor(q) {
        this.api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
        this.limit = 1;
        this.q = q;
    }
}

const flexBox = document.querySelector('#gifs');
const searchBtn = document.querySelector('#get-gif');
const qTerm = document.getElementById('search');

function appendGiphy(gif) {
    const newImg = document.createElement('img');
    newImg.src = gif;
    console.log(flexBox);
    flexBox.append(newImg);
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const qTerm = document.getElementById('search');
    if(!qTerm.value) {
        randomGiphy();
        return;
    }
    searchGiphy(qTerm.value);
    qTerm.value = '';  
})

const removeBtn = document.getElementById('remove');
removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    flexBox.innerHTML = '';
})



