
let shareButton = document.querySelector(".div__share-icon");

let img = document.querySelector(".share-icon-img");

let shareMenu = document.querySelector(".share-menu");

shareButton.addEventListener("click", function() {

    if (shareMenu.style.display === "none") 
    {
        shareMenu.style.display = "flex";

        img.src = "images/icon-share-white.svg";
    
        shareButton.style.backgroundColor = "hsla(214, 17%, 51%, 0.678)";
    } 
    else 
    {
        shareMenu.style.display = "none";

        img.src = "images/icon-share.svg";
    
        shareButton.style.backgroundColor = "hsla(212, 23%, 69%, 0.274)";
    }
});

if (window.innerWidth < 1200) {

    let shareButtonB = `
    <div class="div__share-icon share-menu__share-icon">
          <img src="images/icon-share-white.svg" alt="Share icon" class="share-icon-img">
    </div>
    `;

    shareMenu.insertAdjacentHTML("beforeend", shareButtonB);
}