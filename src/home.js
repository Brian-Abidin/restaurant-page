/* on window load, load the home page. 
home button is highlighted. DOM elements are 
inside a function and the funciton runs on
window load. */

console.log("Hello World");

const content = document.getElementById("content");
const wrapper = document.createElement("div");
const header = document.createElement("div");
const title = document.createElement("div");
const rightlinks = document.createElement("ul");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");
const emptyheader = document.createElement("div");
const midsection = document.createElement("div");
const frontImage = document.createElement("div");
const description = document.createElement("div");
const descText = document.createElement("div");
const descText2 = document.createElement("div");
const descTitle = document.createElement("p");
const descImage = document.createElement("div");
const footer = document.createElement("footer");
const image1 = document.createElement("img");
const image2 = document.createElement("img");

/* add class tags */
wrapper.classList.add("wrapper");
header.classList.add("header");
title.classList.add("title");
rightlinks.classList.add("rightlinks");
home.classList.add("home");
menu.classList.add("menu");
contact.classList.add("contact");
emptyheader.classList.add("emptyheader");
midsection.classList.add("midsection");
frontImage.classList.add("frontImage");
description.classList.add("description");
descText.classList.add("descText");
descText2.classList.add("descText2");
descTitle.classList.add("descTitle");
descImage.classList.add("descImage");
footer.classList.add("footer");
image1.classList.add("image1");
image2.classList.add("image2");


window.addEventListener("load", (event) => {
    // content.appendChild(wrapper);

    // /* wrapper */
    // wrapper.appendChild(header);
    // wrapper.appendChild(midsection);
    // wrapper.appendChild(footer);

    // /* header */
    // header.appendChild(title);
    // header.appendChild(rightlinks);
    // header.appendChild(emptyheader);

    // title.textContent = "Elegant Food";

    // rightlinks.appendChild(home);
    // rightlinks.appendChild(menu);
    // rightlinks.appendChild(contact);

    // home.textContent = "Home";
    // menu.textContent = "Menu";
    // contact.textContent = "Contact";

    // /* midsection */
    // midsection.appendChild(frontImage);
    // midsection.appendChild(description);

    // frontImage.appendChild(image1);
    // image1.src = "./images/surfandturf.jpeg";
    // image1.alt = "black plate on a table that includes cooked lobster cut in half on the left, a baked potato cut up in the middle, and a steak cut in slices on the right"

    // /* description */
    // description.appendChild(descText);
    // description.appendChild(descImage);

    // descText.appendChild(descTitle);
    // descText.appendChild(descText2)

    // descTitle.textContent = "Delicious Food Awaits!";
    // descText2.textContent = "Our food is made from fresh daily with the finest ingredients local to the area! Red Lobsters, Blue Oysters, Jumbo Shrimp, Fried Calamari, Filet Mingon, Ribeye, and more. From the surf to the turf and every delicious dish in between, this restuarant offers it all!"
   
    // descImage.appendChild(image2);
    // image2.src = "./images/seafood.jpg"
    // image2.alt = "bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce."

    // /* footer */
    // footer.textContent = "The Odin Project 2023";
});

function load(){
    content.appendChild(wrapper);

    /* wrapper */
    wrapper.appendChild(header);
    wrapper.appendChild(midsection);
    wrapper.appendChild(footer);

    /* header */
    header.appendChild(title);
    header.appendChild(rightlinks);
    header.appendChild(emptyheader);

    title.textContent = "Elegant Food";

    rightlinks.appendChild(home);
    rightlinks.appendChild(menu);
    rightlinks.appendChild(contact);

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    /* midsection */
    midsection.appendChild(frontImage);
    midsection.appendChild(description);

    frontImage.appendChild(image1);
    image1.src = "./images/surfandturf.jpeg";
    image1.alt = "black plate on a table that includes cooked lobster cut in half on the left, a baked potato cut up in the middle, and a steak cut in slices on the right"

    /* description */
    description.appendChild(descText);
    description.appendChild(descImage);

    descText.appendChild(descTitle);
    descText.appendChild(descText2)

    descTitle.textContent = "Delicious Food Awaits!";
    descText2.textContent = "Our food is made from fresh daily with the finest ingredients local to the area! Red Lobsters, Blue Oysters, Jumbo Shrimp, Fried Calamari, Filet Mingon, Ribeye, and more. From the surf to the turf and every delicious dish in between, this restuarant offers it all!"
   
    descImage.appendChild(image2);
    image2.src = "./images/seafood.jpg"
    image2.alt = "bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce."

    /* footer */
    footer.textContent = "The Odin Project 2023";
}

function addStyle(text){
    const button = text;
    button.style.borderBottom = "5px solid Black";
    button.style.backgroundColor = "rgb(187, 151, 52)";
    button.style.color = "white";
    button.style.borderRadius = "10px";
}

function removeStyle(text){
    const button = text;
    button.style.borderBottom = "";
    button.style.backgroundColor = "";
    button.style.color = "";
    button.style.borderRadius = "";
}

home.addEventListener("click", () => {
    removeStyle(menu);
    removeStyle(contact);
    addStyle(home);

    midsection.replaceChildren();

    midsection.appendChild(frontImage);
    midsection.appendChild(description);

    /* front image */
    frontImage.appendChild(image1);
    image1.src = "./images/surfandturf.jpeg";
    image1.alt = "black plate on a table that includes cooked lobster cut in half on the left, a baked potato cut up in the middle, and a steak cut in slices on the right"

    /* description */
    description.appendChild(descText);
    description.appendChild(descImage);

    descText.appendChild(descTitle);
    descText.appendChild(descText2)

    descTitle.textContent = "Delicious Food Awaits!";
    descText2.textContent = "Our food is made from fresh daily with the finest ingredients local to the area! Red Lobsters, Blue Oysters, Jumbo Shrimp, Fried Calamari, Filet Mingon, Ribeye, and more. From the surf to the turf and every delicious dish in between, this restuarant offers it all!"
   
    descImage.appendChild(image2);
    image2.src = "./images/seafood.jpg"
    image2.alt = "bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce."
});

menu.addEventListener("click", ()=> {
    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);


    midsection.replaceChildren();

    midsection.textContent = "HELLO THERE"
});

contact.addEventListener("click", ()=> {
    removeStyle(home);
    removeStyle(menu);
    addStyle(contact);

    midsection.replaceChildren();

    midsection.textContent = "Hello World";
})

export default load;