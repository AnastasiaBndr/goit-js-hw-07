import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");


const markup=galleryItems.map(({original, preview,description})=>{
    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");

    li.className="gallery__item";
    a.className="gallery__link";
    img.className='gallery__image';

    a.href=original;
    a.setAttribute('onClick', "return false");
    img.src=preview;
    img.alt=description;

    a.appendChild(img);
    li.appendChild(a);
    
    return li.outerHTML;
})

gallery.innerHTML=markup.join("");

gallery.addEventListener("click", onClick);

   var lightbox=null;
function onClick(evt){
    
    if(!evt.target.classList.contains("gallery__image")){
        return;
    }

    if (lightbox !== null) {
        lightbox.parentNode.remove();
        lightbox = null;
      }

    const imgName = evt.target.alt;
    const currentItem = galleryItems.find(({description})=> imgName===description);

    
    lightbox = new SimpleLightbox('.gallery a',{
        captions: true,
        captionsData: 'alt', 
        captionSelector:'img',
        captionPosition:'outside', 
        CaptionDelay:'250ms'});
    }
