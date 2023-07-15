// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryJs = document.querySelector('.gallery');
//galleryJs.addEventListener('click', makeBigPicture);


let lii = ' ';

galleryItems.map(item => {

let itemText = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}"  onclick="return false">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source ="${item.original}"
      alt="${item.description}"
     
    />
  </a>
</li>`
lii += itemText;


})
console.log(lii)
galleryJs.insertAdjacentHTML('afterbegin',lii);


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

console.log(galleryItems);
