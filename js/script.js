/* scroller */
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100));
}

setScrollVar()

const observer = new IntersectionObserver(entries => {
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
})


/* Auto typed */
var typed = new Typed('.auto-type', {
    strings: ['Caroline.', 'a Developer.', 'Freelancer.'],
    typeSpeed: 130,
    backSpeed: 100,
    loop: true
  });


/* cursor custom */
    let mouseX = 0
    let mouseY = 0
    let customCursor = document.querySelector('.cursor-wrapper');

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
