const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () =>{

    imagenes.forEach( (imagen) => {
        const scroll = this.scrollY/ -20;
        imagen.style.backgroundPositionY = `${scroll}px`;
    } )
});

document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind('[data-fancybox]', {
        // Custom options for all galleries
      });  
      Fancybox.bind('[data-fancybox="gallery-a"]', {
        // Custom options for the first gallery
      });    
    
      Fancybox.bind('[data-fancybox="gallery-b"]', {
        // Custom options for the second gallery

      }); 

      Fancybox.bind('[data-fancybox="gallery"]', {
        compact: false,
        Carousel: {
          Navigation : false
        },
        Toolbar: {
          display: {
            left: [],
            middle: ["prev", "infobar", "next"],
            right: ["close"],
          }
        }
      });  

});
 
