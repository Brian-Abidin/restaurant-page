/* create menu button
on click loads the HTML elements
create HTML elements. removes the divs that are showing
and adds the divs for the Menu tab */

import {home, menu, contact, midsection, leftItem1, 
        middleItem1, rightItem1, menuItem1, menuItem2,
        menuItem3, price2, leftItem2, middleItem2, rightItem2, itemName2} from  "./domElements"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"
import spaghetti from "./images/spaghetti.jpg"


export default function addMenu(){
    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);

    midsection.replaceChildren();

    midsection.appendChild(menuItem1);
    midsection.appendChild(menuItem2);
    midsection.appendChild(menuItem3);

    midsection.style.display = "grid";
    midsection.style.marginLeft = "200px";
    midsection.style.marginRight = "200px";
    midsection.style.gridTemplateRows = "200px, repeat(2, 1fr)";

    menuItem1.appendChild(leftItem1);
    menuItem1.appendChild(middleItem1);
    menuItem1.appendChild(rightItem1);

    menuItem2.appendChild(leftItem2);
    menuItem2.appendChild(middleItem2);
    menuItem2.appendChild(rightItem2);

    leftItem2.appendChild(itemName2);
    leftItem2.appendChild(price2);

    // menuItem1.textContent = "Menu item 1 and price"
    // menuItem2.textContent = "Description of item"
    // menuItem3.textContent = "image"

    middleItem1.textContent = "Dinner";
    itemName2.textContent = "Spaghetti and Meatballs";
    price2.textContent = "$17.99";
    middleItem2.textContent = "A large bowl of delicious in house made spaghetti and beef meatballs with freshly made tomato and basil based sauce. Topped with italian parmesean."
    rightItem2.src = spaghetti;


    // midsection.textContent = "HELLO THERE"
}