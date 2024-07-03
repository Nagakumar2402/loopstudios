const close = document.querySelector(".close"),
  mobileMenu = document.querySelector(".mobile__menu"),
  open = document.querySelector(".hamburger__menu");

close.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.style.overflowY = "auto";
});
open.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  document.body.style.overflowY = "hidden";
});
