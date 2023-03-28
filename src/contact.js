import {home, menu, contact, midsection} from  "./functions/domElements"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"

export default function addContact(){
    removeStyle(home);
    removeStyle(menu);
    addStyle(contact);

    midsection.replaceChildren();

    midsection.textContent = "Hello World"
} 