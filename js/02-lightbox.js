import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const newGallery = document.querySelector('.gallery');

const markup = galleryItems
	.map(
		image =>
			`
        <a class="gallery__item" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
        `
	)
	.join('');

newGallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
});
