let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector("nav ul li a.active").classList.remove("active");
    item.classList.add("active");
    document.querySelector("main >section.active").classList.remove("active");
    document
      .querySelector(`main>section${item.getAttribute("href")}`)
      .classList.add("active");
  });
});

document
  .querySelector("#sidebar .toggle-sidebar")
  .addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("open");
  });

document.addEventListener("DOMContentLoaded", function () {
  var atroposElement = document.querySelector("#my-atropos");
  if (atroposElement) {
    Atropos({
      el: atroposElement,
      rotate: true,
      rotateTouch: true,
      shadow: true,
      highlight: true,
    });
  } else {
    console.error("Atropos element not found");
  }
});
