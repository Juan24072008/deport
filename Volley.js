document.addEventListener('DOMContentLoaded', function () {
    const botonesVerMas = document.querySelectorAll('.leer-mas');

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', function (e) {
            e.preventDefault(); 

            const seccion = this.closest('.contenedor');
            const textoExtra = seccion.querySelector('.extra-text');
            
            textoExtra.classList.toggle('open');
            
            if (textoExtra.classList.contains('open')) {
                this.textContent = 'Ver menos';
            } else {
                this.textContent = 'Ver más';
            }
        });
    });
});