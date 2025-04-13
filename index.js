const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll('.gallery-container img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Close when clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
});