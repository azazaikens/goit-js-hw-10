import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const refs = {
    catsMenu: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catsInfo: document.querySelector('.cat-info')
}

console.log(fetchBreeds().then(data => console.log(data)))
fetchBreeds()
    .then(cats => {
        refs.catsMenu.classList.remove('hidden');
        refs.loader.classList.add('hidden');
        let catsList = ' ';
        for (let i = 0; i < cats.length; i++) {
            catsList += `<option value='${cats[i].id}'>${cats[i].name}</option>`;
        }
    // console.log(catsList)
    refs.catsMenu.innerHTML = catsList;
    }).catch(() => {
    refs.catsMenu.classList.add('hidden');
    refs.catsInfo.classList.add('hidden');
    refs.loader.classList.add('hidden');
})

refs.catsMenu.addEventListener('change', ev => {
    refs.catsMenu.classList.add('hidden');
    refs.catsInfo.classList.add('hidden');
    refs.loader.classList.remove('hidden');
    
    fetchCatByBreed(ev.target.value).then(cat => {
        refs.catsInfo.innerHTML = `<img class='photoCat' src='${cat[0].url}'
        alt='${cat[0].breeds[0].alt_names}'
        >
        <div class='conteinerInfo'>
            <h1 class='nameCat'>${cat[0].breeds[0].name}</h1>
            <p class='descriptionCat'>${cat[0].breeds[0].description}</p>
            <p class='temperament'>
                <span class="temperamentSpan">Temperament: </span>${cat[0].breeds[0].temperament}
            </p>
        </div>`;
        refs.catsMenu.classList.remove('hidden');
        refs.catsInfo.classList.remove('hidden');
        refs.loader.classList.add('hidden');
        refs.error.classList.add('hidden')
    }).catch(() => {
        refs.catsMenu.classList.add('hidden');
        refs.catsInfo.classList.add('hidden');
        refs.loader.classList.add('hidden');
        refs.error.classList.remove('hidden')
    })
    console.log(1)
})