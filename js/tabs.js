window.addEventListener("load", function() {
    // Tabs Services
    // Get button DOM
    var buttons = document.getElementsByClassName("buttons");
    // Get contents divs containers
    var contents = document.getElementsByClassName("tab-content");
    j = 1;

    // Display first content div
    contents[0].style.display = "block";

    var previousButton = buttons[0];
    var previousContent = contents[0];
    for (let key in Object.keys(contents)) {
        buttons[key].addEventListener("click", function() {
            // Display content of tab
            contents[key].style.display = "block";
            // Hide previous content and change color button
            if (previousContent && previousContent && contents[key] != previousContent) {
                previousContent.style.display = "none";
                buttons[key].classList.toggle("displayed-button-tab");
                buttons[key].classList.toggle("hidden-button-tab");
                previousButton.classList.toggle("displayed-button-tab");
                previousButton.classList.toggle("hidden-button-tab");
            }
            // Save content and button objects to hide them for next buttons clicks
            previousButton = buttons[key];
            previousContent = contents[key];
        });
}});
