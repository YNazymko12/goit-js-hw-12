import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { fetchImages } from './js/pixabay-api';
import { createGalleryCard } from './js/render-functions';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.js-gallery a');

const toggleLoader = () => {
  loaderEl.classList.toggle('is-hidden');
};

const showError = message => {
  iziToast.error({
    message: message,
    position: 'topRight',
    maxWidth: 400,
  });
};

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    const searchedValue = searchFormEl.elements.user_query.value.trim();
    if (searchedValue === '') {
      return;
    }
    galleryEl.innerHTML = '';
    toggleLoader();

    const response = await fetchImages(searchedValue);

    if (response.data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    const galleryMarkup = response.data.hits
      .map(imgDetails => createGalleryCard(imgDetails))
      .join('');

    galleryEl.innerHTML = galleryMarkup;

    lightbox.refresh();
    searchFormEl.reset();
  } catch (error) {
    console.log(error);
    showError(`${error}`);
  } finally {
    toggleLoader();
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
