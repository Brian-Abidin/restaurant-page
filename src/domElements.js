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

content.classList.add("content")
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


export {
    content,
    wrapper,
    header,
    title,
    rightlinks,
    home,
    menu,
    contact, 
    emptyheader,
    midsection,
    frontImage, 
    description,
    descText,
    descText2,
    descTitle,
    descImage,
    footer,
    image1, 
    image2
}