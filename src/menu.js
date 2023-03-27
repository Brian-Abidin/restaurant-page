/* create menu button
on click loads the HTML elements
create HTML elements. removes the divs that are showing
and adds the divs for the Menu tab */
import {home, menu, contact, midsection, leftMenu, 
        middleMenu, rightMenu, menuItem1, menuItem2,
        menuItem3} from  "./domElements"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"


export default function addMenu(){
    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);

    midsection.replaceChildren();

    midsection.appendChild(menuItem1);
    midsection.appendChild(menuItem2);
    midsection.appendChild(menuItem3);

    midsection.style.display = "grid";
    midsection.style.marginLeft = "100px";
    midsection.style.marginRight = "100px";
    midsection.style. gridTemplateRows = "repeat(3, 1fr)";


    menuItem1.textContent = "Menu item 1 and price"
    menuItem2.textContent = "Description of item"
    menuItem3.textContent = "image"

    // midsection.textContent = "HELLO THERE"
}