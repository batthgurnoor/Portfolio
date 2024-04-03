let navLinks = document.querySelectorAll("a.inner-link");

navLinks.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item);
    document.querySelector("nav ul li a.active").classList.remove("active");
    document
      .querySelector(`nav ul li a[href='${item.getAttribute("href")}']`)
      .classList.add("active");
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

const shuffleInstance = new Shuffle(
  document.querySelector("#work .work-items"),
  {
    itemSelector: ".item",
  }
);

const filterButtons = document.querySelectorAll("#work .filters button");
filterButtons.forEach((item) => {
  item.addEventListener("click", workFilter);
});

function workFilter() {
  const clickedButton = event.currentTarget;
  const clickedButtonGroup = clickedButton.getAttribute("data-group");

  const activeButton = document.querySelector("#work .filters button.active");
  activeButton.classList.remove("active");
  clickedButton.classList.add("active");

  shuffleInstance.filter(clickedButtonGroup);
}

const workElements = document.querySelectorAll("#work .work-items .wrap");
console.log(workElements);
workElements.forEach((item) => {
  item.addEventListener("click", toggleModal);
});

function toggleModal() {
  $("#workModal").modal("show");
}
