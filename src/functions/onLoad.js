import {content, wrapper, header, title, rightlinks, home, menu, contact, 
        emptyheader, midsection, frontImage, image1, image2, description, 
        descText, descText2, descTitle, descImage, footer} from  "../domElements"
import surfandturf from "../images/surfandturf.jpeg"
import seafood from "../images/seafood.jpg"

export default function load(){
    content.appendChild(wrapper);

    /* wrapper */
    wrapper.appendChild(header);
    wrapper.appendChild(midsection);
    wrapper.appendChild(footer);

    /* header */
    header.appendChild(title);
    header.appendChild(rightlinks);
    header.appendChild(emptyheader);

    title.textContent = "Elegant Food";

    rightlinks.appendChild(home);
    rightlinks.appendChild(menu);
    rightlinks.appendChild(contact);

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    /* midsection */
    midsection.appendChild(frontImage);
    midsection.appendChild(description);

    frontImage.appendChild(image1);
    // image1.src = "./images/surfandturf.jpeg";
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
    // image2.src = "./images/seafood.jpg"
    image2.src = seafood;
    image2.alt = "bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce."

    /* footer */
    footer.textContent = "The Odin Project 2023";
}