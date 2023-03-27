import {home, menu, contact, midsection} from  "./domElements"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"

export default function addContact(){
    removeStyle(home);
    removeStyle(menu);
    addStyle(contact);

    midsection.replaceChildren();

    midsection.textContent = "Hello World"
} 