import {home, menu, contact, midsection} from  "./constants"
import removeStyle from "./functions/removeStyle"
import addStyle from "./functions/addStyle"

export default function addContact(){
    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);

    midsection.replaceChildren();

    midsection.textContent = "HELLO THERE"
} 