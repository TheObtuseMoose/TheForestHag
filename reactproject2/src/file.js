/* eslint-disable no-unused-vars */


function openHamburgerMenu() {
    var x = document.getElementById('myLinks');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 

//Highlights current pages link
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


//window.addEventListener('load', function isMobile() {
   // let hasTouchScreen = false;
  //  if ("maxTouchPoints" in navigator) {
        //hasTouchScreen = navigator.maxTouchPoints > 0;
   // } else if ("msMaxTouchPoints" in navigator) {
    //    hasTouchScreen = navigator.msMaxTouchPoints > 0;
   // } else {
     //   const mQ = matchMedia?.("(pointer:coarse)");
       // if (mQ?.media === "(pointer:coarse)") {
         //   hasTouchScreen = !!mQ.matches;
       // } else if ("orientation" in window) {
           // hasTouchScreen = true; // deprecated, but good fallback
        //} else {
            // Only as a last resort, fall back to user agent sniffing
            //const UA = navigator.userAgent;
            //hasTouchScreen =
                ///\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                ///\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        //}
    //}

    //if (hasTouchScreen) {
        
    //}
    //else {
       
    //}   
    

//})
