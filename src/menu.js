/* create menu button
on click loads the HTML elements
create HTML elements. removes the divs that are showing
and adds the divs for the Menu tab */

menu.addEventListener("click", ()=> {
    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);


    midsection.replaceChildren();

    midsection.textContent = "HELLO THERE"
});