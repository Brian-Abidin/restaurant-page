import "./style.css";
import load from "./functions/onLoad";
import addMenu from "./menu";
import addContact from "./contact";
import {home, menu, contact} from "./functions/domElements";
import addHome from "./home";

load();

home.addEventListener("click", (e) => {
    addHome();
});

menu.addEventListener("click", (e) =>{
    addMenu();
});

contact.addEventListener("click", (e) =>{
    addContact();
});