const menuCards = document.querySelectorAll(".project-card-menu");

function closeMenus(exceptButton = null) {
  menuCards.forEach((card) => {
    const button = card.querySelector(".card-button");
    const menu = card.querySelector(".project-menu");

    if (button !== exceptButton) {
      button.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });
}

menuCards.forEach((card) => {
  const button = card.querySelector(".card-button");
  const menu = card.querySelector(".project-menu");

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    closeMenus(button);
    button.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".project-card-menu")) {
    closeMenus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenus();
  }
});
