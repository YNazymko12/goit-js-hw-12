const PIXABAY_API_KEY = '40905423-24d24966a8b04fca12252a818';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = searchedQuery => {
  const urlParams = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 24,
  });
  return fetch(`${BASE_URL}?${urlParams.toString()}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
