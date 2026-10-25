const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav a");
const toast = document.querySelector("#toast");
const currentYear = document.querySelector("#currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

menuButton?.addEventListener("click", () => {
  nav.classList.toggle("is-open");

  const isOpen = nav.classList.contains("is-open");
  menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-label", "Открыть меню");
  });
});

let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3000);
}

document.addEventListener("click", (event) => {
  const clickedInsideMenu =
    nav?.contains(event.target) || menuButton?.contains(event.target);

  if (!clickedInsideMenu) {
    nav?.classList.remove("is-open");
    menuButton?.setAttribute("aria-label", "Открыть меню");
  }
});
