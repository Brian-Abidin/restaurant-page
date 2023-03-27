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

const leftItem1= document.createElement("div");
const middleItem1 = document.createElement("div");
const rightItem1 = document.createElement("div");

const leftItem2= document.createElement("div");
const price2 = document.createElement("div");
const itemName2 = document.createElement("div");
const middleItem2 = document.createElement("div");
const rightItem2 = document.createElement("img");

const leftItem3 = document.createElement("div");


const middleItem3 = document.createElement("div");
const rightItem3 = document.createElement("img");

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

leftItem1.classList.add("leftItem1");
middleItem1.classList.add("middleItem1");
rightItem1.classList.add("rightItem1");

leftItem2.classList.add("leftItem2");
price2.classList.add("price2");
itemName2.classList.add("itemName2");
middleItem2.classList.add("middleItem2");
rightItem2.classList.add("rightItem2");



leftItem3.classList.add("leftItem3");
middleItem3.classList.add("middleItem3");
rightItem3.classList.add("rightItem3");

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
    leftItem1,
    middleItem1,
    rightItem1,
    leftItem2,
    middleItem2,
    rightItem2,
    itemName2,
    price2,
    leftItem3,
    middleItem3,
    rightItem3,
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