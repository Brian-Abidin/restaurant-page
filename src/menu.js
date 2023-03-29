/* create menu button
on click loads the HTML elements
create HTML elements. removes the divs that are showing
and adds the divs for the Menu tab */

import {home, menu, contact, midsection} from  "./functions/domElements"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"
import spaghetti from "./images/spaghetti.jpg"
import lobster from "./images/lobster.png"
import surfandturf from "./images/lobandsteak.jpg"
import octopus from "./images/octopus.jpeg"

function styleItems(){
    const child = midsection.childElementCount;
    for(let i = 1; i < child; i+=1){
        const menuItem = document.getElementById(`menuItem${i+1}`);
        const leftItem = document.getElementById(`leftItem${i+1}`);
        const middleItem = document.getElementById(`middleItem${i+1}`);
        const rightItem = document.getElementById(`rightItem${i+1}`);
        // const itemPrice = document.getElementById(`itemPrice${i+1}`);
        // const itemName = document.getElementById(`itemName${i+1}`);

        menuItem.style.display = "grid";
        menuItem.style.gridTemplateColumns = "repeat(3, 1fr)";
        menuItem.style.justifyItems = "center";
        menuItem.style.alignItems = "center";

        leftItem.style.fontWeight = "700";
        leftItem.style.setProperty("font-size", "calc(1rem + 0.5vw)");
        leftItem.style.display = "grid";
        leftItem.style.gridTemplateRows = "1fr 1fr";
        leftItem.style.alignItems = "center";
        leftItem.style.justifyItems = "center";

        middleItem.style.setProperty("font-size", "calc(1rem + 0.2vw)");

        rightItem.style.width = "200px";
        rightItem.style.height = "200px";
    }
}


function addItem(num){
    for(let i = 0; i < num; i+=1 ){
        const menuItem = document.createElement("div");
        const leftItem = document.createElement("div");
        const middleItem = document.createElement("div");
        const rightItem = document.createElement("img");
        const itemPrice = document.createElement("div");
        const itemName = document.createElement("div");

        menuItem.setAttribute("id", `menuItem${i+1}`);
        leftItem.setAttribute("id", `leftItem${i+1}`);
        middleItem.setAttribute("id", `middleItem${i+1}`);
        rightItem.setAttribute("id", `rightItem${i+1}`);
        itemPrice.setAttribute("id", `itemPrice${i+1}`);
        itemName.setAttribute("id", `itemName${i+1}`);

        midsection.appendChild(menuItem);
        menuItem.appendChild(leftItem);
        leftItem.appendChild(itemName);
        leftItem.appendChild(itemPrice);
        menuItem.appendChild(middleItem);
        menuItem.appendChild(rightItem);
    }
    styleItems();
}


function styleMenu(){
    midsection.style.display = "grid";
    midsection.style.marginLeft = "200px";
    midsection.style.marginRight = "200px";
    midsection.style.gridTemplateRows = "200px, repeat(auto-fit, 1fr)";
    midsection.style.gap = "10px";
    midsection.style.minWidth = "540px";
    midsection.style.paddingBottom = "50px";
}


export default function addMenu(){

    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);

    midsection.replaceChildren();
    midsection.style = "";

    addItem(5);
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

    document.getElementById("itemName4").textContent = "Surf and Turf";
    document.getElementById("itemPrice4").textContent = "$31.99";
    document.getElementById("middleItem4").textContent = "Fresh cooked lobster tail served with a 8 oz filet mignon steak covered in a butter garlic sauce made in house."
    document.getElementById("rightItem4").src = surfandturf;

    document.getElementById("itemName5").textContent = "Hot Dog Octopus Special";
    document.getElementById("itemPrice5").textContent = "$19.99";
    document.getElementById("middleItem5").textContent = "Hot dog made from 100% wagyu beef cut into a shape of an octopus on top of a lettuce, carrot, and spinach salad."
    document.getElementById("rightItem5").src = octopus;
}
