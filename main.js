const hamburger = document.querySelector(".main-nav__hamburger"),
      itemsDiv = document.querySelector(".main-nav__items"),
      text = hamburger.lastElementChild,
      items = document.querySelectorAll(".main-nav__items > a"),
      importantInfo = document.querySelector(".important-info"),
      activateSearch = document.querySelector(".search-button"),
      searchBar = document.querySelector(".search-bar");

if(localStorage.getItem("visited") == "true") {
    importantInfo.style.display = "none";
}

hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    itemsDiv.classList.toggle("active");

    if (text.textContent == "Menu")
        text.textContent = "Zavřít";
    else
        text.textContent = "Menu";
};

items.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        itemsDiv.classList.remove("active");

        text.textContent = "Zavřít";
    });
});

importantInfo.onclick = () => {
    importantInfo.style.display = "none";
    localStorage.setItem("visited", true);
};

activateSearch.onclick = () => {
    searchBar.classList.toggle("active");
    activateSearch.querySelector("i").textContent = 
    searchBar.classList.contains("active") ? "close" : "search";
}

searchBar.querySelectorAll("button").forEach((item, index) => {
        if(index == 0) {
            item.addEventListener("click", (e)=> {
                window.location = "vyhledavani.htm";
                e.preventDefault();
            });
        } else {
            item.addEventListener("click", (e)=> {
                activateSearch.querySelector("i").textContent = "search";
                searchBar.classList.remove("active");
                e.preventDefault();
            });
        }
});