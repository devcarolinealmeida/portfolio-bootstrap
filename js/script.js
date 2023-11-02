/* splash screen */

let intro = document.querySelector(".intro");
let introText = document.querySelector(".intro-text");
let navbar = document.querySelector(".navbar");
let transitionSection = document.querySelector(".transition-section");
let topSection = document.querySelector(".top-section");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    introText.classList.add("fade");
    introText.classList.remove("active");
  }, 3800);

  setTimeout(() => {
    /* intro.style.top = '-100vh'; */
    intro.style.zIndex = "-1";
    transitionSection.style.transform = "translateY(-100vh)";
  }, 4000);
  setTimeout(() => {
    topSection.style.transform = "translateY(-100vh)";
  }, 4200);

  setTimeout(() => {
    navbar.classList.remove("opacity-0");
    navbar.classList.add("active");
  }, 4500);
});

/* scroller */
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );
}

setScrollVar();

/* const observer = new IntersectionObserver(entries => {
    for(let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i]
        if(entry.isIntersecting) {
            document.querySelectorAll("[data-img]").forEach(img => {
                img.classList.remove("show")
            })
            const img = document.querySelector(entry.target.dataset.imgToShow);
            img?.classList.add("show");
            break
        }
    }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
    observer.observe(section)
}) */

/*----- Auto typed ----*/
/* intro */
var typed = new Typed(".auto-type", {
  strings: ["Oi, Hi, Ciao!"],
  typeSpeed: 130,
  /* backSpeed: 5,
  loop: false, */
  startDelay: 500,
});

/* apresentazione I'm */
var typed = new Typed(".auto-type-2", {
  strings: ["caroline", "dev", "front-end", "freelance"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  
  onStringTyped: (arrayPos, self) => {
    console.log(arrayPos, colors)

    var colors = [
      "var(--bs-yellow)",
      "var(--bs-orange)",
      "var(--bs-purple)",
      "var(--bs-green)",
    ];
    var currentColor = 0;
    var arrayPos = document.querySelectorAll("#auto-type-2");
    console.log(arrayPos)


    function changeColor() {
      --currentColor;
      if (currentColor < 0) currentColor = colors.length - 1;
      for (var i = 0; i < arrayPos.length; i++) {
        arrayPos[i].style.color = colors[(currentColor + i) % colors.length];
      }
    }

    changeColor();
  },
});

/* var colors = [
  "var(--bs-yellow)",
  "var(--bs-orange)",
  "var(--bs-purple)",
  "var(--bs-green)",
];
var currentColor = 0;
var lis = document.querySelectorAll("#auto-type-2");

function changeColor() {
  --currentColor;
  if (currentColor < 0) currentColor = colors.length - 1;
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor + i) % colors.length];
  }
}

setInterval(changeColor, 3500); */

/* cursor custom */
let mouseX = 0;
let mouseY = 0;
let customCursor = document.querySelector(".cursor-wrapper");

document.addEventListener("mousemove", setMousePosition, false);

function moveCursor(timestamp) {
  customCursor.style.setProperty("--cursorXPos", mouseX + "px");
  customCursor.style.setProperty("--cursorYPos", mouseY + "px");

  requestAnimationFrame(moveCursor);
}

function setMousePosition(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

moveCursor();
