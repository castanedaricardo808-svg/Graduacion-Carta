function openCard() {
  const carta = document.querySelector('.letter');
  const sobre = document.querySelector('.envelope');
  const cinta = document.querySelector('.cinta-roja');
  const audio = document.getElementById('musica');

  // Mostrar carta con efecto 3D
  carta.classList.remove('hidden');
  requestAnimationFrame(() => {
    carta.classList.add('visible');
  });

  // Ocultar sobre
  sobre.style.opacity = "0";

  // Mostrar cinta roja
  if (cinta) cinta.classList.remove('hidden');

  // Reproducir música
  if (audio) {
    audio.play().catch(err => {
      console.log("Autoplay bloqueado:", err);
    });
  }

  // Lanzar confeti en lluvia continua
  lluviaConfeti();
}

function mostrarImagen() {
  const imagen = document.querySelector('.imagen-desplegada');
  if (!imagen) return;
  imagen.classList.remove('hidden');
  imagen.classList.add('visible');
}

function lluviaConfeti() {
  const container = document.querySelector('.confetti-container');

  // Generar confeti continuamente
  setInterval(() => {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Posición horizontal aleatoria
    confetti.style.left = Math.random() * 100 + 'vw';

    // Color aleatorio
    confetti.style.backgroundColor = coloresConfeti();

    // Tamaño aleatorio
    const size = Math.random() * 8 + 5;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';

    // Duración distinta para cada pieza
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';

    container.appendChild(confetti);

    // Eliminar confeti después de caer
    setTimeout(() => confetti.remove(), 6000);
  }, 100); // cada 0.1 segundos se crea una pieza → lluvia continua
}

function coloresConfeti() {
  const colores = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#ff69b4'];
  return colores[Math.floor(Math.random() * colores.length)];
}