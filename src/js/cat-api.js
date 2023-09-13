import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_Oqiw3O8kWlAUROsKNyQZauISxmoosAlMQVUbbPzRcwMbrBeRLT7NSpJjySEKlCwr';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  return axios.get(url).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
    const urlSearch = 'https://api.thecatapi.com/v1/images/search';
    const Params = new URLSearchParams({ breed_ids: breedId });
    const url = `${urlSearch}?${Params}`;

    return axios.get(url).then(response => response.data);
};