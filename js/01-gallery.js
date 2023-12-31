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
    img.dataset.source=original;

    a.appendChild(img);
    li.appendChild(a);
    
    return li.outerHTML;
})

gallery.insertAdjacentHTML("beforeend",markup.join(""));

gallery.addEventListener("click", onClick);

function onClick(evt){

    const imgName = evt.target.alt;
    const currentItem = galleryItems.find(({description})=> imgName===description);

    const instance = basicLightbox.create(`
    <div>
      <img src="${currentItem.original}" width="1000" alt="${currentItem.description}" />
      <h2 class="text-item">${currentItem.description}</h2>
    </div>`,{
        onShow:()=>window.addEventListener("keydown", keyPress),
        onClose: ()=>window.removeEventListener("keydown", keyPress)
    });

    instance.show();

    function keyPress(evtKey){
        if(evtKey.key==="Escape")
        instance.close();
    }

   
}