import removeStyle from "./removeStyle"
import addStyle from "./addStyle"
import * as dom from "../constants"


export default function addMenu(){
    removeStyle(dom.home);
    removeStyle(dom.contact);
    addStyle(dom.menu);

    dom.midsection.replaceChildren();

    dom.midsection.textContent = "HELLO THERE"
}