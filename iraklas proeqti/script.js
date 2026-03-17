const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#f0f8ff";
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "white";
  });
});