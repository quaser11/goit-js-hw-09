import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {galleryItems} from './gallery-items.js';
import '../css/index.css'

const imagesList = document.querySelector(".gallery")

function makeImgMarkup(obj) {
  return obj
    .map((image) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
           <img class="gallery__image" src="${image.preview}" alt="${image.description}" title="${image.description}"/>
        </a>
     </li>`
    })
    .join("");
}

function appendImages(list) {
  return (list.innerHTML = makeImgMarkup(galleryItems));
}


appendImages(imagesList);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay:250})