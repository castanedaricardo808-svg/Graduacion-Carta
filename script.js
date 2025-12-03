function openCard() {
  const envelope = document.querySelector('.envelope');
  const letter = document.querySelector('.letter');
  const confettiContainer = document.querySelector('.confetti-container');

  envelope.style.opacity = '0';
  setTimeout(() => {
    envelope.classList.add('hidden');
    letter.classList.remove('hidden');
    letter.classList.add('visible');
    launchConfetti();
  }, 1000);
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDelay = Math.random() * 3 + 's';
    document.querySelector('.confetti-container').appendChild(confetti);
  }
}

function getRandomColor() {
  const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];
  return colors[Math.floor(Math.random() * colors.length)];
}