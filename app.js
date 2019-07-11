var count = 0;

setInterval (function() { 
    const openPic = document.querySelector(".FFVAD").click();
    const heart = document.querySelector("button.afkep");
    const arrow = document.querySelector("a.coreSpriteRightPaginationArrow");

    if (heart) {
        count++;
        heart.click();
        console.log("you have liked " + count + "  of photos");

    }
    arrow.click();


}, 15000);