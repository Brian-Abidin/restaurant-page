import {home, menu, contact, midsection} from  "./functions/domElements"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"

export default function addContact(){
    removeStyle(home);
    removeStyle(menu);
    addStyle(contact);
    midsection.replaceChildren();
    midsection.style = "";

    midsection.style.display = "grid";
    midsection.style.justifyItems = "center";
    midsection.style.alignItems = "center";
    midsection.style.setProperty("font-size", "calc(1rem + 0.2vw)");

    const phoneNum = document.createElement("div");
    const locate = document.createElement("div");
    const social = document.createElement("div");
    const socialTitle = document.createElement("div");
    const socialLinks = document.createElement("div");
    const twitter = document.createElement("button");
    const instagram = document.createElement("button");
    const facebook = document.createElement("button");
    
    social.classList.add("socials");
    socialLinks.classList.add("socialLinks");
    twitter.classList.add("twitter");
    instagram.classList.add("instagram");
    facebook.classList.add("facebook");
    locate.classList.add("locate");
    phoneNum.classList.add("phoneNum")

    midsection.appendChild(phoneNum);
    midsection.appendChild(locate);
    midsection.appendChild(social);

    social.appendChild(socialTitle);
    social.appendChild(socialLinks);

    socialLinks.appendChild(twitter);
    socialLinks.appendChild(instagram);
    socialLinks.appendChild(facebook);

    locate.textContent = "Located on 123 Imagine Blvd Imagination, AB 12345"
    phoneNum.textContent = "Call us: (123)-123-1234"
    social.style.display = "grid";
    social.style.gridTemplateRows = "1fr 1fr"
    social.style.justifyContent = "center";
    social.style.alignContent = "center";

    socialLinks.style.display = "flex";
    socialLinks.style.justifyContent = "center";
    socialLinks.style.alignContent = "center";
    socialLinks.style.gap = "10px"

    socialTitle.textContent = "Follow us on our Social Media!"

    twitter.onclick = function link (){
        window.open("https://twitter.com");
    }

    facebook.onclick = function link (){
        window.open("https://facebook.com");
    }

    instagram.onclick = function link (){
        window.open("https://instagram.com");
    }
} 