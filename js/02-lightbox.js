/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const body = document.querySelector("body");

const imgMarkup = galleryItems
  .map(
    (e) =>
      `
    <a class="gallery__item" href="${e.original}">
        <img class="gallery__image"  src="${e.preview}" alt="${e.description}" />
    </a>
      
      `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", imgMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.removeEventListener("mousewheel", () => {
  return;
});

//console.log(navigator.userAgent, navigator.appVersion, navigator.userAgentData);
