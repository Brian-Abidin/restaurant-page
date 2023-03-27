import removeStyle from "./removeStyle"
import addStyle from "./addStyle"
import * as dom from "../constants"
import surfandturf from "../images/surfandturf.jpeg"
import seafood from "../images/seafood.jpg"

export default function addHome(){
    removeStyle(dom.menu);
    removeStyle(dom.contact);
    addStyle(dom.home);

    dom.midsection.replaceChildren();

    dom.midsection.appendChild(dom.frontImage);
    dom.midsection.appendChild(dom.description);

    /* front image */
    dom.frontImage.appendChild(dom.image1);
    dom.image1.src = surfandturf;
    dom.image1.alt = "black plate on a table that includes cooked lobster cut in half on the left, a baked potato cut up in the middle, and a steak cut in slices on the right"

    /* description */
    dom.description.appendChild(dom.descText);
    dom.description.appendChild(dom.descImage);

    dom.descText.appendChild(dom.descTitle);
    dom.descText.appendChild(dom.descText2)

    dom.descTitle.textContent = "Delicious Food Awaits!";
    dom.descText2.textContent = "Our food is made from fresh daily with the finest ingredients local to the area! Red Lobsters, Blue Oysters, Jumbo Shrimp, Fried Calamari, Filet Mingon, Ribeye, and more. From the surf to the turf and every delicious dish in between, this restuarant offers it all!"
   
    dom.descImage.appendChild(dom.image2);
    dom.image2.src = seafood;
    dom.image2.alt = "bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce."

}