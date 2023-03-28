/* create menu button
on click loads the HTML elements
create HTML elements. removes the divs that are showing
and adds the divs for the Menu tab */

import {home, menu, contact, midsection, leftItem1, 
        middleItem1, rightItem1, menuItem1, menuItem2,
        menuItem3, itemPrice2, leftItem2, middleItem2, rightItem2, 
        itemName2, leftItem3, itemName3, itemPrice3, rightItem3,
        middleItem3} from  "./functions/domElements"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"
import spaghetti from "./images/spaghetti.jpg"
import lobster from "./images/lobster.png"

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
    midsection.style.gridTemplateRows = "200px, repeat(2, )";
    midsection.style.gap = "10px"
    midsection.style.minWidth = "540px"

    menuItem1.appendChild(leftItem1);
    menuItem1.appendChild(middleItem1);
    menuItem1.appendChild(rightItem1);

    menuItem2.appendChild(leftItem2);
    menuItem2.appendChild(middleItem2);
    menuItem2.appendChild(rightItem2);

    leftItem2.appendChild(itemName2);
    leftItem2.appendChild(itemPrice2);

    middleItem1.textContent = "Dinner";

    itemName2.textContent = "Spaghetti and Meatballs";
    itemPrice2.textContent = "$17.99";
    middleItem2.textContent = "A large bowl of delicious in house made spaghetti and beef meatballs with freshly made tomato and basil based sauce. Topped with italian parmesean."
    rightItem2.src = spaghetti;

    menuItem3.appendChild(leftItem3);
    menuItem3.appendChild(middleItem3);
    menuItem3.appendChild(rightItem3);

    leftItem3.appendChild(itemName3);
    leftItem3.appendChild(itemPrice3);

    itemName3.textContent = "Red Lobster with Clam Chowder";
    itemPrice3.textContent = "$24.99";
    middleItem3.textContent = "A locally caught cooked Red Lobster served with a side of Clam Chowder and savory butter sauce"
    rightItem3.src = lobster;


    // midsection.textContent = "HELLO THERE"
}