toggle_button = document.getElementById("mobile-menu-button");
nav = document.getElementById("main_nav");

function menu_toggle(){
    let is_open = toggle_button.getAttribute("data-open");

    if(is_open === "true"){
        toggle_button.setAttribute("data-open", "false");
        nav.setAttribute("data-open", "false");
    }
    else{
        toggle_button.setAttribute("data-open", "true");
        nav.setAttribute("data-open", "true");
    }
}