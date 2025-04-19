document.querySelectorAll('.ver-mas').forEach(boton => {
    boton.addEventListener('click', () => {
      const contenedor = boton.parentElement;
      const extra = contenedor.querySelector('.extra-texto');
  
      if (extra.style.display === 'block') {
        extra.style.display = 'none';
        boton.textContent = 'Ver más';
      } else {
        extra.style.display = 'block';
        boton.textContent = 'Ver menos';
      }
    });
  });