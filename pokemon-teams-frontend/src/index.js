const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function fetchPokemons() {

    return fetch(POKEMONS_URL)
        .then(res => res.json())
        .then(json => renderPokemons(json));
}


function renderPokemons(json) {
    json["data"].forEach((pokemon) => {
        debugger
        let main = document.querySelector("main");
        let div = document.createElement("div")
        div.className = "card";
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let trainerBtn = document.createElement('button')
        trainerBtn.id = pokemon["attributes"]['trainer_id']
        let btn = document.createElement('button')
        btn.className = "release"
        btn.id = pokemon["id"];
        btn.innerText = "Release"
        trainerBtn.innerText = "AddPokemon"
        li.id = pokemon["id"]
        li.innerText = `${pokemon['attributes']['nickname']} (${pokemon['attributes']['species']})`
        span.innerHTML = btn
        div.append(trainerBtn, ul)
        ul.appendChild(li)
        li.appendChild(btn)
        main.appendChild(div)
        btn.addEventListener("click", () => {
            li.style.display = "none"
        });
        trainerBtn.addEventListener("click", () => {
            li.style.display = "block"
        })
    });

}





document.addEventListener("DOMContentLoaded", () => {
    fetchPokemons()
})