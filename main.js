const hamburger = document.querySelector(".main-nav__hamburger"),
      itemsDiv = document.querySelector(".main-nav__items"),
      text = hamburger.lastElementChild,
      items = document.querySelectorAll(".main-nav__items > a"),
      importantInfo = document.querySelector(".important-info");

if(localStorage.getItem("visited") == "true") {
    importantInfo.style.display = "none";
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    itemsDiv.classList.toggle("active");

    if (text.textContent == "Menu")
        text.textContent = "Zavřít";
    else
        text.textContent = "Menu";
});

items.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        itemsDiv.classList.remove("active");

        text.textContent = "Zavřít";
    });
});

importantInfo.addEventListener("click", () => {
    importantInfo.style.display = "none";
    localStorage.setItem("visited", true);
});