(function() {
    
    function toogleDisplayMenu(menuDisplayed) {
        if(!menuDisplayed) {
            navigationMenu.style.display = "initial";
            menuDisplayed = true;
        } else {
            navigationMenu.style.display = "none";
            menuDisplayed = false;
        }
    }

    window.addEventListener("load", function() {
        // Menu clicks events
        // Display navigation menu when click on hamburger menu 
        var menuIcon = document.querySelector(".menu-hamburger");
        var navigationMenu = document.querySelector(".nav");
        var menuDisplayed = false;
        // Display menu on click and on blur
        for (evn of ["click", "blur"]) {
            menuIcon.addEventListener(evn, function(e) {
                e.preventDefault();
                navigationMenu.classList.toggle("display-initial");
            });
        }
    })

})()