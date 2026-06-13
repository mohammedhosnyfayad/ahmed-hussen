var btn_dark = document.querySelector(".btn_dark");
var btn_darkIcon = document.querySelector(".btn_dark i");
var st = true;
var btn_dark = document.querySelector(".btn_dark");
var btn_darkIcon = document.querySelector(".btn_dark i");
var hero = document.querySelector(".hero-section");
var about = document.querySelector(".about");
var footer = document.querySelector(".footer-section");
var skills = document.querySelector(".skills-section");
var portfolio = document.querySelector(".portfolio-section");
var experience = document.querySelector(".experience-section");
var wrapper = document.querySelector(".wrapper");
var stats = document.querySelector(".stats-section");
var contactsection = document.querySelector(".contact-section");
document.body.style.fontFamily = "Tajawal";

btn_dark.addEventListener("click", function () {
  btn_darkIcon.classList.toggle("right");
  hero.classList.toggle("bg-body");
  footer.classList.toggle("bg-body");
  about.classList.toggle("bg-body");
  skills.classList.toggle("bg-body");
  portfolio.classList.toggle("bg-body");
  experience.classList.toggle("bg-body");
  wrapper.classList.toggle("bg-body");
  stats.classList.toggle("bg-body");
  contactsection.classList.toggle("bg-body");
});

document
  .querySelector(".open-appearance-btn")
  .addEventListener("click", function () {
    document.querySelector(".right-seh").classList.toggle("moveactive");
  });
document.querySelector(".button-close").addEventListener("click", function () {
  document.querySelector(".right-seh").classList.remove("moveactive");
});

var btnFilter = document.querySelectorAll(".btn-filter");
var cardTab = document.querySelectorAll(".card-tab");
var all = document.querySelector(".all");

for (var i = 0; i < btnFilter.length; i++) {
  btnFilter[i].addEventListener("click", function (e) {
    for (let s = 0; s < btnFilter.length; s++) {
      btnFilter[s].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    for (let n = 0; n < cardTab.length; n++) {
      cardTab[n].classList.add("d-none");
      if (e.currentTarget.getAttribute("data-tab") === cardTab[n].id) {
        cardTab[n].classList.remove("d-none");
      }
    }
  });
}
all.addEventListener("click", function () {
  for (let v = 0; v < cardTab.length; v++) {
    cardTab[v].classList.remove("d-none");
  }
});

var arrowNext = document.querySelector(".arrow-next");
var arrowPrev = document.querySelector(".arrow-prev");
var testimonialsGrid = document.querySelector(".testimonials-grid");
var dots = document.querySelectorAll(".dot_1");
var resetfooter = document.querySelector(".reset-footer");

var currentindex = 0;
var a = 275;

var maxIndex = 5;

arrowNext.addEventListener("click", function () {
  if (currentindex < maxIndex) {
    currentindex++;
  }

  testimonialsGrid.style.transform = `translateX(${a * currentindex}px)`;
  for (let c = 0; c < dots.length; c++) {
    dots[c].classList.remove("active");
  }
  dots[currentindex].classList.add("active");
});

arrowPrev.addEventListener("click", function () {
  if (currentindex > 0) {
    currentindex--;
  }
  for (let c = 0; c < dots.length; c++) {
    dots[c].classList.remove("active");
  }
  dots[currentindex].classList.add("active");

  testimonialsGrid.style.transform = `translateX(${a * currentindex}px)`;
});
var color = document.querySelectorAll(".color");
var about = document.querySelector(".about");
var fonts = document.querySelectorAll(".font-btn");
var textgradient = document.querySelectorAll(".text-gradient");

document.body.style.fontFamily = localStorage.getItem("font");

var ind = localStorage.getItem("index");
var savedColor = localStorage.getItem("color");

if (ind !== null && color[ind]) {
  for (let c = 0; c < color.length; c++) {
    color[c].classList.remove("activeBOR");
  }
  color[ind].classList.add("activeBOR");
}

if (savedColor) {
  document.body.style.backgroundColor = savedColor;

  for (let t = 0; t < textgradient.length; t++) {
    textgradient[t].style.color = savedColor;
  }
}

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function () {
    for (let c = 0; c < color.length; c++) {
      color[c].classList.remove("activeBOR");
    }

    this.classList.add("activeBOR");

    var code = this.getAttribute("data-code");

    localStorage.setItem("color", code);
    localStorage.setItem("index", i);

    document.body.style.backgroundColor = code;

    for (let t = 0; t < textgradient.length; t++) {
      textgradient[t].style.color = code;
    }
  });
}

for (let s = 0; s < fonts.length; s++) {
  fonts[s].addEventListener("click", function () {
    var font = this.getAttribute("data-font");

    localStorage.setItem("font", font);

    document.body.style.fontFamily = font;
  });
}
resetfooter.addEventListener("click", function () {
  localStorage.clear();

  document.body.style.backgroundColor = "";
  document.body.style.fontFamily = "";

  for (let t = 0; t < textgradient.length; t++) {
    textgradient[t].style.color = "";
  }

  for (let c = 0; c < color.length; c++) {
    color[c].classList.remove("activeBOR");
  }
});
