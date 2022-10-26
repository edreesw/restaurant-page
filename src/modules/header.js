export const [ABOUT_TAB, MENU_TAB, CONTACT_TAB] = ["about-tab", "menu-tab", "contact-tab"]; 

export default function header() {
    console.log("In Header Func");
    /** 
     <header>
        <h1 class="restaurant-header-text">Pizza Pasta Restaurant</h1>
        <nav class="restaurant-nav"><ul>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul></nav>
    </header>
    **/
    const header = document.getElementById("header"); 

    //headers: 
    let h1 = document.createElement("h1"); 
    h1.textContent = "Pizza Pasta Restaurant"; 
    header.appendChild(h1); 


    //setup tabs: 
    let nav = document.createElement("nav"); 
    nav.id = "header-nav"; 
    nav.classList.add("header-nav"); 

    let tabList = document.createElement("ul"); 
    nav.appendChild(tabList); 


    let aboutTab = document.createElement("li"); 
    aboutTab.textContent = "About"; 
    aboutTab.id = ABOUT_TAB; 
    aboutTab.classList.add("tab"); 
    tabList.appendChild(aboutTab); 

    let menuTab = document.createElement("li"); 
    menuTab.textContent = "Menu"; 
    menuTab.id = MENU_TAB; 
    menuTab.classList.add("tab"); 
    tabList.appendChild(menuTab); 

    let contactTab = document.createElement("li"); 
    contactTab.textContent = "Contact"; 
    contactTab.id = CONTACT_TAB; 
    contactTab.classList.add("tab"); 
    tabList.appendChild(contactTab);
    header.appendChild(nav); 

}

