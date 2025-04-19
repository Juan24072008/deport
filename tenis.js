// Tema claro/oscuro
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  toggle.textContent = current === 'dark' ? '🌙' : '☀️';
});

// Expandir detalle de cartas
document.querySelectorAll('.expand').forEach(btn => {
  btn.addEventListener('click', () => {
    const detalle = btn.nextElementSibling;
    if (detalle.style.maxHeight) {
      detalle.style.maxHeight = null;
      btn.textContent = 'Leer más';
    } else {
      detalle.style.maxHeight = detalle.scrollHeight + 'px';
      btn.textContent = 'Leer menos';
    }
  });
});

// Formulario de contacto
document.getElementById('contacto-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-response').textContent = '¡Mensaje enviado! Gracias por tu interés.';
  e.target.reset();
});
