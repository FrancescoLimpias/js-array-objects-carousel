// References
const galleryElement = document.getElementById("gallery");
const thumbsElement = document.getElementById("thumbs");
const inputUp = document.getElementById("input-up");
const inputDown = document.getElementById("input-down");

// Gallery data
const gallery = [{ image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', }];
const thumbs = [];

// Gallery configuration
let activeItem = 0;

// Build gallery
for (let i = 0; i < gallery.length; i++) {

    // Create container div
    const itemElement = document.createElement("div");

    // Link gallery active element to activeImage
    if (i == activeItem) {
        itemElement.classList.add("active");
    }

    // Create image element
    const image = document.createElement("img");
    image.src = gallery[i].image;

    // Create caption div
    const caption = document.createElement("div");
    caption.classList.add("caption");

    // Create title
    const title = document.createElement("h3");
    title.innerHTML = gallery[i].title;

    // Create text
    const text = document.createElement("p");
    text.innerHTML = gallery[i].text;
    
    // Build final element
    caption.append(title);
    caption.append(text);
    itemElement.append(image);
    itemElement.append(caption);

    // Add container to galleries
    galleryElement.append(itemElement);
    gallery[i] = itemElement;

    // Add image to thumbnails
    let imageClone = image.cloneNode();
    thumbsElement.prepend(imageClone);
    thumbs.push(imageClone)
}

// Listen for clicks
inputUp.addEventListener("click", function () {

    // Hide old active image
    gallery[activeItem].classList.remove("active");
    thumbs[activeItem].classList.remove("active");

    // Check for images on right
    if (activeItem == gallery.length - 1) {
        // no more images on right
        activeItem = 0;
    } else {
        activeItem++;
    }

    // Dispay new active image
    gallery[activeItem].classList.add("active");
    thumbs[activeItem].classList.add("active");

});
inputDown.addEventListener("click", function () {

    // Hide old active image
    gallery[activeItem].classList.remove("active");
    thumbs[activeItem].classList.remove("active");

    // Check for images on right
    if (activeItem == 0) {
        // no more images on right
        activeItem = gallery.length - 1;
    } else {
        activeItem--;
    }

    // Dispay new active image
    gallery[activeItem].classList.add("active");
    thumbs[activeItem].classList.add("active");

});

