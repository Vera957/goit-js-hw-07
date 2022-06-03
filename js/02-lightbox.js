import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imgMarkup = galleryItems
  .map(
    (e) =>
      `
    <a class="gallery__item" href="${e.original}">
        <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
    </a>
    
      `
  )
  .join("");

gallery.insertAdjacentHTML('beforeend', imgMarkup);
    
    let lightbox = new SimpleLightbox(".gallery a", {
      /* options */
      captionsData: "alt",
      captionPosition: "bottom",
      captions: true,
      captionDelay: 250,
    });


console.log(navigator.userAgentData);



