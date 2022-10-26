import loadAbout from "./modules/about.js"; 
import loadMenu from "./modules/menu.js"; 
import loadContact from "./modules/contact.js"; 
import initialLoad from "./modules/initialLoad.js"; 
import "./styles/style.css"; 
import { ABOUT_TAB, MENU_TAB, CONTACT_TAB } from "./modules/header.js";


const mainElement = document.getElementById("main-content"); 

function clearMainContent() {
    //clear the "main" section to get ready to load new tab/nav content
	while(mainElement.firstChild) {
		mainElement.firstChild.remove()
	}
}

function loadTabContent(e) {
    //load appropriate main content based on which nav button tab was clicked
    let tabId = this.id; 
	
	clearMainContent(); 

	let tabs = document.querySelectorAll(".tab"); 
	tabs.forEach((tab) => {
		tab.classList.remove("selected"); 
	});
	this.classList.add("selected"); 

    switch(tabId) {
        case ABOUT_TAB : 
            loadAbout(); 
            break; 
        case MENU_TAB : 
            loadMenu(); 
            break; 
        case CONTACT_TAB : 
            loadContact(); 
            break; 
    }    
}

initialLoad(); 

//todo: assign eventlistener to each tab element
const navTabs = document.querySelectorAll(".tab"); 
navTabs.forEach((tab) => {
    tab.addEventListener("click", loadTabContent); 
});