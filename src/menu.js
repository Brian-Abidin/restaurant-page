/* create menu button
on click loads the HTML elements
create HTML elements. removes the divs that are showing
and adds the divs for the Menu tab */
import {home, menu, contact, midsection} from  "./constants"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"


export default function addMenu(){
    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);


    midsection.replaceChildren();

    midsection.textContent = "HELLO THERE"
}