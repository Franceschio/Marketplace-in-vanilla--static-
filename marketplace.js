function heroVariable() {
  setInterval(() => {
    i++;
    if (i === 3) {
      i = 0;
    }

    if (i === 0) {
      firstCircle.style.backgroundColor = "blueviolet";
      secondCircle.style.backgroundColor = "transparent";
      thirdCircle.style.backgroundColor = "transparent";
      heroTitle.textContent = "Benvenuto!";
    } else if (i === 1) {
      firstCircle.style.backgroundColor = "transparent";
      secondCircle.style.backgroundColor = "blueviolet";
      thirdCircle.style.backgroundColor = "transparent";
      heroTitle.textContent = "Accedi per iniziare...";
    } else if (i === 2) {
      firstCircle.style.backgroundColor = "transparent";
      secondCircle.style.backgroundColor = "transparent";
      thirdCircle.style.backgroundColor = "blueviolet";
      heroTitle.textContent = "...e inizia ad aquistare ora stesso!";
    }

    currentImage = images[i];
    heroImg.setAttribute("src", `${currentImage}`);
  }, 4000);
}

const heroImg = document.querySelector("#heroImg");
const heroTitle = document.querySelector(".heroTitle");
let i = 0;
let currentImage = "https://picsum.photos/id/1/1280/1080";
let images = [
  "https://picsum.photos/id/1/1280/1080",
  "https://picsum.photos/id/2/1280/1080",
  "https://picsum.photos/id/3/1280/1080",
];
const firstCircle = document.querySelector("#firstCircle");
const secondCircle = document.querySelector("#secondCircle");
const thirdCircle = document.querySelector("#thirdCircle");

heroImg.setAttribute("src", `${currentImage}`);
firstCircle.style.backgroundColor = "blueviolet";

heroVariable();

firstCircle.addEventListener("click", () => {
  i = 0;

  firstCircle.style.backgroundColor = "blueviolet";
  secondCircle.style.backgroundColor = "transparent";
  thirdCircle.style.backgroundColor = "transparent";

  heroTitle.textContent = "Benvenuto!";

  currentImage = images[i];
  heroImg.setAttribute("src", `${currentImage}`);
});

secondCircle.addEventListener("click", () => {
  i = 1;

  firstCircle.style.backgroundColor = "transparent";
  secondCircle.style.backgroundColor = "blueviolet";
  thirdCircle.style.backgroundColor = "transparent";

  heroTitle.textContent = "Accedi per iniziare...";

  currentImage = images[i];
  heroImg.setAttribute("src", `${currentImage}`);
});

thirdCircle.addEventListener("click", () => {
  i = 2;

  firstCircle.style.backgroundColor = "transparent";
  secondCircle.style.backgroundColor = "transparent";
  thirdCircle.style.backgroundColor = "blueviolet";

  heroTitle.textContent = "...e inizia ad aquistare ora stesso!";

  currentImage = images[i];
  heroImg.setAttribute("src", `${currentImage}`);
});
