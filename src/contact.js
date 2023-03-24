menu.addEventListener("click", ()=> {
    removeStyle(home);
    removeStyle(contact);
    addStyle(menu);


    midsection.replaceChildren();

    midsection.textContent = "HELLO THERE"
});