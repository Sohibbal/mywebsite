const nameEl = document.getElementById("typed-name");
const text = "Sohibbal";
let i = 0;
let isDeleting = false;

function typeWriter() {
  if (isDeleting) {
    nameEl.innerHTML = text.substring(0, i--);
  } else {
    nameEl.innerHTML = text.substring(0, i++);
  }
  // Kecepatan dikurangi, tambah random biar smooth
  let baseDelay = isDeleting ? 120 : 200;
  let delay = baseDelay + Math.random() * 50;
  if (!isDeleting && i === text.length + 1) {
    delay = 1500; // Diam sejenak setelah selesai ngetik
    isDeleting = true;
  } else if (isDeleting && i === 0) {
    delay = 800; // Diam sejenak setelah selesai hapus
    isDeleting = false;
  }
  setTimeout(typeWriter, delay);
}
window.onload = typeWriter;

// Scroll Animation for Popups
const popups = document.querySelectorAll('.popup');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });
popups.forEach(popup => {
  observer.observe(popup);
});
