/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const itemsList = galleryItems
  .map(
    (item) =>
      `
    <div class='gallery__item'>
      <a class='gallery__link' href='${item.original}'>
        <img
          class='gallery__image'
          src='${item.preview}' 
          
          data-source='${item.original}'
          alt='${item.description}'
        />
      </a>
    </div>
`
  )
  .join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", itemsList);

gallery.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  const img = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600" data-esc="false">
`);
  img.show();
  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      img.close();
    }
  });
}