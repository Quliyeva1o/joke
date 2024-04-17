const joke = document.querySelector(".joke")
const api = "https://v2.jokeapi.dev/joke/programming?type=single"


const click = document.querySelector('.click')
click.addEventListener('click', (e) => {
    e.preventDefault
    fetch(api).then((response) => response.json())
        .then((data) => {
            joke.innerHTML = data.joke
        }).catch((err) => console.log(err))
})