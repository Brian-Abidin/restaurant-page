import {home, menu, contact, midsection, frontImage, image1, image2, 
        description, descText, descText2, descTitle, descImage} from  "./functions/domElements"
import seafood from "./images/seafood.jpg";
import surfandturf from "./images/surfandturf.jpeg";
import removeStyle from "./functions/removeStyle";
import addStyle from "./functions/addStyle";

export default function addHome(){
    removeStyle(menu);
    removeStyle(contact);
    addStyle(home);

    midsection.replaceChildren();
    midsection.style = "";

    midsection.appendChild(frontImage);
    midsection.appendChild(description);

    /* front image */
    frontImage.appendChild(image1);
    image1.src = surfandturf;
    image1.alt = "black plate on a table that includes cooked lobster cut in half on the left, a baked potato cut up in the middle, and a steak cut in slices on the right"

    /* description */
    description.appendChild(descText);
    description.appendChild(descImage);

    descText.appendChild(descTitle);
    descText.appendChild(descText2)

    descTitle.textContent = "Delicious Food Awaits!";
    descText2.textContent = "Our food is made from fresh daily with the finest ingredients local to the area! Red Lobsters, Blue Oysters, Jumbo Shrimp, Fried Calamari, Filet Mingon, Ribeye, and more. From the surf to the turf and every delicious dish in between, this restuarant offers it all!"
   
    descImage.appendChild(image2);
    image2.src = seafood;
    image2.alt = "bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce."
}