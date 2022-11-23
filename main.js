// References
const galleryElement = document.getElementById("gallery");
const thumbsElement = document.getElementById("thumbs");
const inputUp = document.getElementById("input-up");
const inputDown = document.getElementById("input-down");

// Listen for clicks
inputUp.addEventListener("click", activeNextItem);
inputDown.addEventListener("click", activePreviousItem);

// Gallery data
let gallery = [{ image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', }];
let thumbs = [];

// Gallery configuration
let activeItem = 0;

// Build gallery
gallery = gallery.map((item, index) => {

    // ITEM ELEMENT
    // Create container div
    const itemElement = document.createElement("div");

    // Create image element
    const image = document.createElement("img");
    image.src = item.image;

    // Create caption div
    const caption = document.createElement("div");
    caption.classList.add("caption");

    // Create title
    const title = document.createElement("h3");
    title.innerHTML = item.title;

    // Create text
    const text = document.createElement("p");
    text.innerHTML = item.text;

    // Build final itemElement
    caption.append(title, text);
    itemElement.append(image, caption);

    // THUMBNAIL
    // Create thumbnail
    let thumb = image.cloneNode();
    thumb.addEventListener("click", () => selectActiveItem(index));

    // APPEND TO DOM
    // Check for element activation
    if (index == activeItem) {
        itemElement.classList.add("active");
        thumb.classList.add("active");
    }

    // Add itemElement and thumbnail to DOM
    galleryElement.append(itemElement);
    thumbsElement.prepend(thumb);

    // Add itemElement and thumbnail to their arrays
    thumbs.push(thumb);
    return itemElement;
});

// Select the new active item
function selectActiveItem(newActiveItem) {

    // Hide old active image
    gallery[activeItem].classList.remove("active");
    thumbs[activeItem].classList.remove("active");

    // Dispay new active image
    gallery[newActiveItem].classList.add("active");
    thumbs[newActiveItem].classList.add("active");

    // Assign new active item
    activeItem = newActiveItem;

}

// Go to the next active item
function activeNextItem() {

    // Check for images on right
    if (activeItem == gallery.length - 1) {
        // no more images on right
        selectActiveItem(0);
    } else {
        selectActiveItem(activeItem + 1);
    }

}

function activePreviousItem() {

    // Check for images on right
    if (activeItem == 0) {
        // no more images on right
        selectActiveItem(gallery.length - 1)
    } else {
        selectActiveItem(activeItem - 1);
    }

}


