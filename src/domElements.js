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
const leftMenu = document.createElement("div");
const middleMenu = document.createElement("div");
const rightMenu = document.createElement("div");
const menuItem1 = document.createElement("div");
const menuItem2 = document.createElement("div");
const menuItem3 = document.createElement("div");
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
leftMenu.classList.add("leftMenu");
middleMenu.classList.add("middleMenu");
rightMenu.classList.add("rightMenu");
menuItem1.classList.add("menuItem1");
menuItem2.classList.add("menuItem2");
menuItem3.classList.add("menuItem3");


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
    leftMenu,
    middleMenu,
    rightMenu,
    menuItem1,
    menuItem2,
    menuItem3,
    frontImage, 
    description,
    descText,
    descText2,
    descTitle,
    descImage,
    footer,
    image1, 
    image2,
}