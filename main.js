// References
const galleryElement = document.getElementById("gallery");
const thumbsElement = document.getElementById("thumbs");
const inputUp = document.getElementById("input-up");
const inputDown = document.getElementById("input-down");

// Gallery setup
const nOfImages = 5;
const gallery = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
];
const thumbs = [];

// Active item
let activeImage = 0;

// Build gallery
for (let i = 0; i < nOfImages; i++) {

    // Create image element
    const image = document.createElement("img");
    image.src = `img/${gallery[i]}`;

    // Link gallery active element to activeImage
    if (i == activeImage) {
        image.classList.add("active");
    }

    // Add image to galleries
    galleryElement.append(image);
    gallery[i] = image;

    // Add image to thumbnails
    let imageClone = image.cloneNode();
    thumbsElement.prepend(imageClone);
    thumbs.push(imageClone)
}

// Listen for clicks
inputUp.addEventListener("click", function () {

    // Hide old active image
    gallery[activeImage].classList.remove("active");
    thumbs[activeImage].classList.remove("active");

    // Check for images on right
    if (activeImage == gallery.length - 1) {
        // no more images on right
        activeImage = 0;
    } else {
        activeImage++;
    }

    // Dispay new active image
    gallery[activeImage].classList.add("active");
    thumbs[activeImage].classList.add("active");

});
inputDown.addEventListener("click", function () {

    // Hide old active image
    gallery[activeImage].classList.remove("active");
    thumbs[activeImage].classList.remove("active");

    // Check for images on right
    if (activeImage == 0) {
        // no more images on right
        activeImage = gallery.length - 1;
    } else {
        activeImage--;
    }

    // Dispay new active image
    gallery[activeImage].classList.add("active");
    thumbs[activeImage].classList.add("active");

});

