console.log("hello world");
const images = [
  "img/img-1.jpg",
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
];
const sliderImage = document.getElementById("sliderImage");
let currentIndex = 0;
function nextImage() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
    sliderImage.src = images[currentIndex];
  } else {
    sliderImage.src = images[currentIndex];
  }
}
function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
    sliderImage.src = images[currentIndex];
  } else {
    sliderImage.src = images[currentIndex];
  }
}
