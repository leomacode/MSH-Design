const nav_icon = document.getElementsByClassName("nav-icon")[0];
const nav_items = document.getElementsByClassName("navItems")[0];
const linkGroup = document.getElementsByClassName("links");

nav_icon.addEventListener("click", () => {
  nav_items.classList.contains("open")
    ? nav_items.classList.remove("open")
    : nav_items.classList.add("open");
});

[...linkGroup].map((link) => {
  link.addEventListener("click", () => nav_items.classList.remove("open"));
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest("#nav") &&
    !event.target.closest("#nav-icon") &&
    nav_items.classList.contains("open") &&
    !event.target.type
  ) {
    nav_items.classList.remove("open");
  }
});
