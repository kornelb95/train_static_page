const carouselImages = ["train1", "train2", "train3"];

const carouselItems = document.querySelectorAll(".carousel-item img");

function carousel() {
  carouselItems.forEach((img, i) => {
    img.src = `img/${carouselImages[i]}.jpg`;
  });
  const carouselImg0 = carouselImages[0];
  const carouselImg1 = carouselImages[1];
  const carouselImg2 = carouselImages[2];
  carouselImages[0] = carouselImg2;
  carouselImages[2] = carouselImg1;
  carouselImages[1] = carouselImg0;
}
setInterval(carousel, 5000);

function navigate(obj) {
  document.getElementById(obj).scrollIntoView({
    behavior: "smooth"
  });
}
