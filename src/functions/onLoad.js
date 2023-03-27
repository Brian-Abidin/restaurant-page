import * as dom from "../constants"
import surfandturf from "../images/surfandturf.jpeg"
import seafood from "../images/seafood.jpg"

export default function load(){
    dom.content.appendChild(dom.wrapper);

    /* wrapper */
    dom.wrapper.appendChild(dom.header);
    dom.wrapper.appendChild(dom.midsection);
    dom.wrapper.appendChild(dom.footer);

    /* header */
    dom.header.appendChild(dom.title);
    dom.header.appendChild(dom.rightlinks);
    dom.header.appendChild(dom.emptyheader);

    dom.title.textContent = "Elegant Food";

    dom.rightlinks.appendChild(dom.home);
    dom.rightlinks.appendChild(dom.menu);
    dom.rightlinks.appendChild(dom.contact);

    dom.home.textContent = "Home";
    dom.menu.textContent = "Menu";
    dom.contact.textContent = "Contact";

    /* midsection */
    dom.midsection.appendChild(dom.frontImage);
    dom.midsection.appendChild(dom.description);

    dom.frontImage.appendChild(dom.image1);
    // image1.src = "./images/surfandturf.jpeg";
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
    // image2.src = "./images/seafood.jpg"
    dom.image2.src = seafood;
    dom.image2.alt = "bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce."

    /* footer */
    dom.footer.textContent = "The Odin Project 2023";
}