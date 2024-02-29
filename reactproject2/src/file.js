

function openHamburgerMenu() {
    var x = document.getElementById('myLinks');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 

function highlightSelectedLink() {
    const x = document;

    if (isIndexPage === true) {
        x.querySelector('#home').style.backgroundImage = 'linear-gradient(to right,pink,white)';
    }
    else if (isWoodburningPage === true) {
        x.querySelector('#woodburning').style.backgroundImage = 'linear-gradient(to right,pink,white)';
    }
    else if (isDigitalArtPage === true) {
        x.querySelector('#digitalArt').style.backgroundImage = 'linear-gradient(to right,pink,white)';
    }
    else if (isContactPage === true) {
        x.querySelector('#contact').style.backgroundImage = 'linear-gradient(to right,pink,white)';
    }
}


function isMobile() {
    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
        const mQ = matchMedia?.("(pointer:coarse)");
        if (mQ?.media === "(pointer:coarse)") {
            hasTouchScreen = !!mQ.matches;
        } else if ("orientation" in window) {
            hasTouchScreen = true; // deprecated, but good fallback
        } else {
            // Only as a last resort, fall back to user agent sniffing
            const UA = navigator.userAgent;
            hasTouchScreen =
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
    }

    if (hasTouchScreen) {
        document.querySelector(".disable-menuButtons").style.display = "none";
        document.querySelector('.woodburningContent').style.display = 'flex';
        document.querySelector('.woodburningContent').style.flexDirection = 'column';
        const columnOneImgLabels = document.querySelectorAll(".columnOneImg label, .columnOneImg img");
        for (let i = 0; i < columnOneImgLabels.length; i++) {
            columnOneImgLabels[i].style.display = "grid";
            columnOneImgLabels[i].style.height = "60vw";
            columnOneImgLabels[i].style.justifySelf = "center";
        }
        const columnTwoImgLabels = document.querySelectorAll(".columnTwoImg label, .columnTwoImg img");
        for (let i = 0; i < columnOneImgLabels.length; i++) {
            columnTwoImgLabels[i].style.display = "grid";
            columnTwoImgLabels[i].style.height = "60vw";
            columnTwoImgLabels[i].style.justifySelf = "center";
        }       
        const allWoodburningTitles = document.querySelectorAll(".woodburningContent h2");
        for (let i = 0; i < allWoodburningTitles.length; i++) {
            allWoodburningTitles[i].style.marginTop = '2em'
           
        }       
    }
    else {
        document.querySelector(".topnav").style.display = "none";
    }   
    

}
