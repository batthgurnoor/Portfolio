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
  if (typeof emailjs !== "undefined") {
    emailjs.init("XOA7aiCVVzp5pQLQF");
  }
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
  strings: ["Software Developer", "Full-Stack Developer", "Photographer"],
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
  document.querySelector("#work .meteor-shower").append(meteor);
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

function workFilter(event) {
  const clickedButton = event.currentTarget;
  const clickedButtonGroup = clickedButton.getAttribute("data-group");

  const activeButton = document.querySelector("#work .filters button.active");
  activeButton.classList.remove("active");
  clickedButton.classList.add("active");

  shuffleInstance.filter(clickedButtonGroup);
}

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

function toggleMode(){
  let theme = document.querySelector("html").getAttribute("theme");
  if(theme == "dark"){
    theme = "light";
    
  }
  else{
    theme = "dark";
   
  }
  document.querySelector("html").setAttribute("theme", theme);
}
