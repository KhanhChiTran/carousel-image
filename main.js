const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slide = document.querySelector(".carousel");

let x = 0;

arrowRight.addEventListener("click", () => {
  let timer = setInterval(function () {
    if (x === 600) {
      clearInterval(timer);
      slide.style.transform = `translateX(0px)`;
      slide.appendChild(slide.firstElementChild);
      x = 0;
    } else {
      x += 20;
      slide.style.transform = `translateX(-${x}px)`;
    }
  }, 20);
});
arrowLeft.addEventListener("click", () => {
  let timer = setInterval(function () {
    if (x === 600) {
      clearInterval(timer);
      slide.style.transform = `translateX(0)`;
      slide.prepend(slide.lastElementChild);
      x = 0;
    } else {
      x += 20;
      slide.style.transform = `translateX(${x}px)`;
    }
  }, 20);
});
