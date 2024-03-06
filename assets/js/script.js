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
  var atroposElement = document.querySelector(".my-atropos");
  if (atroposElement) {
    Atropos({
      el: atroposElement,
      rotate: true,
      rotateTouch: true,
      shadow: true,
      highlight: false,
    });
  } else {
    console.error("Atropos element not found");
  }
});
var typed = new Typed(".field h2", {
  strings: ["Developer", "Photographer", "Web Designer"],
  loop: true,
  typeSpeed: 70,
  backDelay: 1000,
  backSpeed: 20,
});

for (let i = 1; i < 15; i++) {
  let meteor = document.createElement("span");
  meteor.classList = "meteor";
  document.querySelector("#home .meteor-shower").append(meteor);
}
