import axios from 'axios';

const PIXABAY_API_KEY = '40905423-24d24966a8b04fca12252a818';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = searchedQuery => {
  const axiosOptions = {
    params: {
      key: PIXABAY_API_KEY,
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 24,
    },
  };

  return axios.get('', axiosOptions);
};
