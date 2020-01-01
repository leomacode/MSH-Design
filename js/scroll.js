var sections = document.querySelectorAll("section[data]");
var links = document.querySelectorAll(".links");

function scroll() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach(link => link.classList.remove("active"));
  links[index].classList.add("active");
}

addEventListener("scroll", scroll);
