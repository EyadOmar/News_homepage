const menuBtn = document.querySelectorAll("header nav img")[0];
const closeBtn = document.querySelectorAll("header nav img")[1];
const navUl = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");
const side = document.querySelector(".side");

function removeSideNav() {
  menuBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
  overlay.classList.add("hidden");
  side.classList.add("hidden");
  navUl.classList.add("hidden");
}

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  overlay.classList.remove("hidden");
  side.classList.remove("hidden");
  navUl.classList.remove("hidden");
});

closeBtn.addEventListener("click", removeSideNav);

const links = document.querySelectorAll("nav ul a");
links.forEach((link) => {
  link.addEventListener("click", removeSideNav);
});
