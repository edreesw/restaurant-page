import generateAboutContent from "./modules/about.js"; 
import generateMenuContent from "./modules/menu.js"; 
import generateContactContent from "./modules/contact.js"; 
import "./styles/style.css"; 
import generateFooter from "./modules/footer.js"; 
import { ABOUT_TAB, MENU_TAB, CONTACT_TAB, default as generateHeader } from "./modules/header.js";


const mainElement = document.getElementById("main-content"); 

function clearMainContent() {
    //clear the "main" section to get ready to load new tab/nav content
	while(mainElement.firstChild) {
		mainElement.firstChild.remove()
	}
}

function initialLoad() {
    //load header, footer, and about page
    document.body.insertBefore(generateHeader(), mainElement); 

    document.body.appendChild(generateFooter()); 

    mainElement.appendChild(generateAboutContent()); 

    const aboutTab = document.getElementById("about-tab"); 
    aboutTab.classList.add("selected");
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
            mainElement.appendChild(generateAboutContent()); 
            break; 
        case MENU_TAB : 
            mainElement.appendChild(generateMenuContent()); 
            break; 
        case CONTACT_TAB : 
            mainElement.appendChild(generateContactContent()); 
            break; 
    }    
}

initialLoad(); 

//todo: assign eventlistener to each tab element
const navTabs = document.querySelectorAll(".tab"); 
navTabs.forEach((tab) => {
    tab.addEventListener("click", loadTabContent); 
});