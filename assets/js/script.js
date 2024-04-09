let navLinks = document.querySelectorAll("a.inner-link");

navLinks.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item);
    document.querySelector("nav ul li a.active").classList.remove("active");
    document.querySelector(`nav ul li a[href='${item.getAttribute("href")}']`).classList.add("active");
    document.querySelector("main >section.active").classList.remove("active");
    document.querySelector(`main>section${item.getAttribute("href")}`).classList.add("active");
  });
});

document.querySelector("#sidebar .toggle-sidebar").addEventListener("click", function () {
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
for (let i = 1; i < 15; i++) {
  let meteor = document.createElement("span");
  meteor.classList = "meteor";
  document.querySelector("#about_me .meteor-shower").append(meteor);
}
for (let i = 1; i < 15; i++) {
  let meteor = document.createElement("span");
  meteor.classList = "meteor";
  document.querySelector("#resume .meteor-shower").append(meteor);
}

for (let i = 1; i < 15; i++) {
  let meteor = document.createElement("span");
  meteor.classList = "meteor";
  document.querySelector("#testimonial .meteor-shower").append(meteor);
}
for (let i = 1; i < 15; i++) {
  let meteor = document.createElement("span");
  meteor.classList = "meteor";

  document.querySelector("#contact .meteor-shower").append(meteor);
}

const shuffleInstance = new Shuffle(document.querySelector("#work .work-items"), {
  itemSelector: ".item",
});

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

workElements.forEach((item) => {
  item.addEventListener("click", function () {
    $("#workModal").modal("show");
    document.querySelector("#workModal .modal-body img").setAttribute("src", item.getAttribute("data-image"));

    document.querySelector("#workModal .modal-body .title").innerText = item.getAttribute("data-title");
    document.querySelector("#workModal .modal-body .description").innerText =
      item.getAttribute("data-description");
    document.querySelector("#workModal .modal-body .client .value").innerText =
      item.getAttribute("data-client");
    document.querySelector("#workModal .modal-body .completed .value").innerText =
      item.getAttribute("data-completed");
    document.querySelector("#workModal .modal-body .skills .value").innerText =
      item.getAttribute("data-skills");
    document
      .querySelector("#workModal .modal-body .project-link a")
      .setAttribute("href", item.getAttribute("data-project-link"));
  });
});

$("#workModal").on("show.bs.modal", function (e) {
  document.getElementById("work").classList.add("blur");
  document.getElementById("sidebar").classList.add("blur");
});
$("#workModal").on("hidden.bs.modal", function (e) {
  document.getElementById("work").classList.remove("blur");
  document.getElementById("sidebar").classList.remove("blur");
});

let testimonialImages = document.querySelectorAll("#testimonial .images img");
testimonialImages.forEach((item, index) => {
  let position = index + 1;
  item.addEventListener("click", function () {
    document.querySelector("#testimonial .images img.active").classList.remove("active");
    document.querySelector(`#testimonial .images img:nth-child(${position})`).classList.add("active");
    document.querySelector("#testimonial .comments .item.active").classList.remove("active");
    document.querySelector(`#testimonial .comments .item:nth-child(${position})`).classList.add("active");
  });
});

let formItems = document.querySelectorAll("#contact .form input, #contact .form textarea");
formItems.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement.classList.add("focus");
  });
  item.addEventListener("keydown", function () {
    item.parentElement.classList.add("focus");
  });
  item.addEventListener("blur", function () {
    if (!item.value) {
      item.parentElement.classList.remove("focus");
    }
  });
});

function initalEmail() {
  emailjs.init("XOA7aiCVVzp5pQLQF");
}

const name1 = document.getElementById("textInput").value;
const email1 = document.getElementById("emailInput").value;
const subject1 = document.getElementById("subjectInput").value;
const message1 = document.getElementById("messageInput").value;
const form = document.getElementById("message-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_j4lg72v", "template_68n9p19", this, "XOA7aiCVVzp5pQLQF").then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      if (response.text == "OK") {
        document.getElementById("textInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("subjectInput").value = "";
        document.getElementById("messageInput").value = "";
        formItems.forEach((item) => {
          item.parentElement.classList.remove("focus");
        });
        window.alert("Message has been sent!");
      }
    },
    (err) => {
      console.log("FAILED...", err);
    }
  );
});
