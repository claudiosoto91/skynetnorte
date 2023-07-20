const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () =>{

    imagenes.forEach( (imagen) => {
        const scroll = this.scrollY/ -20;
        imagen.style.backgroundPositionY = `${scroll}px`;
    } )
});

document.addEventListener("DOMContentLoaded", function () {

    const btnAbrirModal = document.getElementById("btnAbrirModal");
    const btnCerrarModal = document.getElementById("btnCerrarModal");
    const modal = document.getElementById("miModal");

    btnAbrirModal.addEventListener("click", function () {
        modal.style.display = "block"; // Mostrar el modal
    });

    btnCerrarModal.addEventListener("click", function () {
        modal.style.display = "none"; // Ocultar el modal
    });
    
    let indiceImagenActual = 0;
    const imagenes = document.querySelectorAll(".galeria img");

    function mostrarImagen(indice) {
        imagenes[indiceImagenActual].style.display = "none"; // Ocultar imagen actual
        indiceImagenActual = (indice + imagenes.length) % imagenes.length; // Calcular el nuevo índice de imagen
        imagenes[indiceImagenActual].style.display = "block"; // Mostrar nueva imagen
    }

    // Funciones para los botones de navegación
    function cambiarImagen(n) {
        mostrarImagen(indiceImagenActual + n);
    }

    // Mostrar primera imagen al abrir el modal
    mostrarImagen(indiceImagenActual);

    // ... tu código anterior ...

    // Eventos para los botones de navegación
    const botonAnterior = document.querySelector(".anterior");
    const botonSiguiente = document.querySelector(".siguiente");

    botonAnterior.addEventListener("click", function () {
        cambiarImagen(-1);
    });

    botonSiguiente.addEventListener("click", function () {
        cambiarImagen(1);
    });
});
