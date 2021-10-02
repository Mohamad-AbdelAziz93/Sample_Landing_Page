/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const navbar_list = document.querySelectorAll("#navbar__list li");
const navbar = document.querySelector("#navbar__list");


navbar.addEventListener("click", function(ev) {
    if(ev.target.nodeName === "LI") {
        const targetSectionID = ev.target.dataset.target;
        
        const targetSec = document.getElementById(targetSectionID);
        
        targetSec.scrollIntoView({
            behavior:"smooth"
        });
        
        /* Hide list before making modifications
        to reduce the overhead or reflow and repaint */
        const navbarDisplay = navbar.style.display;
        navbar.style.display="none";
        for(let li of navbar_list) {
            li.style.fontWeight="normal";
        }
        ev.target.style.fontWeight="bold";
        /* Show list one more time*/
        navbar.style.display=navbarDisplay;
    }
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

/* Button to scroll to top */
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", function(ev) {
    function scrollDone() {

        const sections = document.querySelectorAll("section");
        const listItems = document.querySelectorAll("#navbar__list li");

        for(let sec of sections) {
            const rect = sec.getBoundingClientRect();

            /* Section inside viewport */
            if((rect.top > -100 && rect.top < window.innerHeight/2) || (rect.top < 0 && rect.bottom > window.innerHeight)) {
                if(!sec.classList.contains("your-active-class")) {
                    sec.classList.add("your-active-class");
                    
                    const secID = sec.id;
                    
                    /* Section name does not exist in nav list */
                    if(!Array.from(listItems).map(item => item.dataset.target).includes(secID)) {
                        let elem = document.createElement("LI");
                        elem.innerHTML = sec.dataset.nav;
                        elem.dataset.target = secID;
                        elem.style.fontWeight = "bold";
                        
                        navbar.appendChild(elem);
                    }

                    for(let li of listItems) {
                        if(li.dataset.target === secID) {
                            li.style.fontWeight = "bold";
                        }
                        else {
                            li.style.fontWeight = "normal";
                        }
                    }
                }
            }
            else {
                sec.classList.remove("your-active-class");
            }
            
        }
    }
    
    setTimeout(scrollDone, 0);
});

