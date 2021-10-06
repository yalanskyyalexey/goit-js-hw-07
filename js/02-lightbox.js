import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const newGallery = document.querySelector('.gallery');
document.querySelector('.gallery').style.listStyle = 'none';

const markup = galleryItems
	.map(
		image =>
			`
		<li>
			<a class="gallery__item" href="${image.original}">
				<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
			</a>
		</li>
        `
	)
	.join('');

newGallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
});
