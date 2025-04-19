document.addEventListener("DOMContentLoaded", function () {
    // Hover para cambiar GIF de fútbol
    const gif = document.getElementById("gifFutbol");
    if (gif) {
      gif.addEventListener("mouseover", () => {
        gif.src = "gif/cr7-celebrando.gif";
      });
      gif.addEventListener("mouseout", () => {
        gif.src = "gif/cr7.gif";
      });
    }
  
    // Hover en menú
    const menuItems = document.querySelectorAll(".menu a");
    menuItems.forEach(item => {
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "gray";
        item.style.color = "white";
      });
      item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "";
        item.style.color = "";
      });
    });
  
    // Desplegables
    const secciones = document.querySelectorAll(".desplegable");
    secciones.forEach(seccion => {
      const titulo = seccion.querySelector(".titulo-seccion");
      titulo.addEventListener("click", () => {
        seccion.classList.toggle("activo");
      });
    });
  });