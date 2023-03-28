/* create menu button
on click loads the HTML elements
create HTML elements. removes the divs that are showing
and adds the divs for the Menu tab */

import {home, menu, contact, midsection} from  "./functions/domElements"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"
import spaghetti from "./images/spaghetti.jpg"
import lobster from "./images/lobster.png"

function addItem(){
    const child = midsection.childElementCount;
    for(let i = child - 1; i<(child); i+=1 ){
        const menuItem = document.createElement("div");
        const leftItem = document.createElement("div");
        const middleItem = document.createElement("div");
        const rightItem = document.createElement("img");
        const itemPrice = document.createElement("div");
        const itemName = document.createElement("div");

        menuItem.setAttribute("id", `menuItem${child+1}`);
        leftItem.setAttribute("id", `leftItem${child+1}`);
        middleItem.setAttribute("id", `middleItem${child+1}`);
        rightItem.setAttribute("id", `rightItem${child+1}`);
        itemPrice.setAttribute("id", `itemPrice${child+1}`);
        itemName.setAttribute("id", `itemName${child+1}`);

        midsection.appendChild(menuItem);
        menuItem.appendChild(leftItem);
        leftItem.appendChild(itemName);
        leftItem.appendChild(itemPrice);
        menuItem.appendChild(middleItem);
        menuItem.appendChild(rightItem);
    }
}

function styleMenu(){
    midsection.style.display = "grid";
    midsection.style.marginLeft = "200px";
    midsection.style.marginRight = "200px";
    midsection.style.gridTemplateRows = "200px, repeat(auto-fit, 1fr)";
    midsection.style.gap = "10px";
    midsection.style.minWidth = "540px";
}


export default function addMenu(){

    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);

    midsection.replaceChildren();

    addItem();
    addItem();
    addItem();
    addItem();
    addItem();
    addItem();

    styleMenu();

    document.getElementById("middleItem1").textContent = "Dinner";

    document.getElementById("itemName2").textContent = "Spaghetti and Meatballs";
    document.getElementById("itemPrice2").textContent = "$17.99";
    document.getElementById("middleItem2").textContent = "A large bowl of delicious in house made spaghetti and beef meatballs with freshly made tomato and basil based sauce. Topped with italian parmesean."
    document.getElementById("rightItem2").src = spaghetti;

    document.getElementById("itemName3").textContent = "Red Lobster with Clam Chowder";
    document.getElementById("itemPrice3").textContent = "$24.99";
    document.getElementById("middleItem3").textContent = "A locally caught cooked Red Lobster served with a side of Clam Chowder and savory butter sauce"
    document.getElementById("rightItem3").src = lobster;

    document.getElementById("itemName4").textContent = "Red Lobster with Clam Chowder";
    document.getElementById("itemPrice4").textContent = "$24.99";
    document.getElementById("middleItem4").textContent = "A locally caught cooked Red Lobster served with a side of Clam Chowder and savory butter sauce"
    document.getElementById("rightItem4").src = lobster;

    document.getElementById("itemName5").textContent = "Red Lobster with Clam Chowder";
    document.getElementById("itemPrice5").textContent = "$24.99";
    document.getElementById("middleItem5").textContent = "A locally caught cooked Red Lobster served with a side of Clam Chowder and savory butter sauce"
    document.getElementById("rightItem5").src = lobster;

    document.getElementById("itemName6").textContent = "Red Lobster with Clam Chowder";
    document.getElementById("itemPrice6").textContent = "$24.99";
    document.getElementById("middleItem6").textContent = "A locally caught cooked Red Lobster served with a side of Clam Chowder and savory butter sauce"
    document.getElementById("rightItem6").src = lobster;

}