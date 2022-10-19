const hamburger = document.querySelector(".main-nav__hamburger"),
      itemsDiv = document.querySelector(".main-nav__items"),
      text = hamburger.lastElementChild,
      items = document.querySelectorAll(".main-nav__items > a");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    itemsDiv.classList.toggle("active");

    if (text.textContent == "Menu")
        text.textContent = "Zavřít";
    else
        text.textContent = "Menu";
});

items.forEach(item => {
    item.addEventListener("click", (e) => {
        hamburger.classList.remove("active");
        itemsDiv.classList.remove("active");

        text.textContent = "Zavřít";
    });
});