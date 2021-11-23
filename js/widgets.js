function tabsContainer(tabContainerDom) {
    var currentTabsContainerObj = this;
    // Get buttons DOM
    currentTabsContainerObj.buttons = tabContainerDom.getElementsByClassName("buttons");
    // Get contents divs containers
    currentTabsContainerObj.contents = tabContainerDom.getElementsByClassName("tab-content");
    // Save tabs buttons and contents
    currentTabsContainerObj.previousButton = currentTabsContainerObj.buttons[0];
    currentTabsContainerObj.previousContent = currentTabsContainerObj.contents[0];
    // Run event listeners
    currentTabsContainerObj.runEvents = function() {
        // Display first content div
        currentTabsContainerObj.contents[0].style.display = "block";
        for (let key in Object.keys(currentTabsContainerObj.contents)) {
            currentTabsContainerObj.buttons[key].addEventListener("click", function(e) {
                // Prevent default anchor linking
                e.preventDefault();
                // Display content of tab
                currentTabsContainerObj.contents[key].style.display = "block";
                // Hide previous content and change color button
                if (currentTabsContainerObj.previousContent && currentTabsContainerObj.previousContent && currentTabsContainerObj.contents[key] != currentTabsContainerObj.previousContent) {
                    currentTabsContainerObj.previousContent.style.display = "none";
                    currentTabsContainerObj.buttons[key].classList.toggle("displayed-button-tab");
                    currentTabsContainerObj.buttons[key].classList.toggle("hidden-button-tab");
                    currentTabsContainerObj.previousButton.classList.toggle("displayed-button-tab");
                    currentTabsContainerObj.previousButton.classList.toggle("hidden-button-tab");
                }
                // Save content and button objects to hide them for next buttons clicks
                currentTabsContainerObj.previousButton = currentTabsContainerObj.buttons[key];
                currentTabsContainerObj.previousContent = currentTabsContainerObj.contents[key];
            });
        }
    }
} 

(function (){
    
// Initialize Switch button state
var switchState = false;
window.addEventListener("load", function() {
    // Tabs Services
    tabsContainersCollection = document.getElementsByClassName("tabs-container");
    for (let key in Object.keys(tabsContainersCollection)) {
        new tabsContainer(tabsContainersCollection[key]).runEvents();
        
    }
    // Reference switch container DOM 
    var switchContainer = document.querySelector(".switch-container");
    // Reference switch ball DOM 
    var switchBall = document.querySelector(".switch-ball");
    // Fire click event listener
    switchContainer.addEventListener("click", function() {
        if (switchState) {
            switchState = true;
        } else {
            switchState = false;
        }    
        switchContainer.classList.toggle("switch-container-flex-end");
    });
});

}());