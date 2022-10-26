import header from "./header.js"; 
import footer from "./footer.js"; 
import loadAbout from "./about.js"; 

export default function initialLoad() {
    //load header, footer, and about page
    header(); 

    footer(); 

    loadAbout(); 

    const aboutTab = document.getElementById("about-tab"); 
    aboutTab.classList.add("selected");
}