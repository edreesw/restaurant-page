import pizzaMenuImg from "../images/pizza-stock2.jpeg"; 
import pastaMenuImg from "../images/pasta-stock.jpeg"; 

function createMenuItem(imageSrc, text, price) {
    const menuItem = document.createElement("div"); 

    menuItem.classList.add("menu-item"); 

    const menuImage = new Image();  
    menuImage.src = imageSrc;
    menuImage.classList.add("menu-item-image"); 
   
    const menuText = document.createElement("p"); 
    menuText.classList.add("menu-item-text"); 
    menuText.textContent = text; 

    const menuPrice = document.createElement("p"); 
    menuPrice.classList.add("menu-item-price"); 
    menuPrice.textContent = price; 

    menuItem.appendChild(menuImage); 
    menuItem.appendChild(menuText); 
    menuItem.appendChild(menuPrice)

    return menuItem; 
}

export default function generateMenuContent() {
    const menuContainer = document.createElement("div"); 
    menuContainer.classList.add("menu-container"); 

    const menuItems = [createMenuItem(pizzaMenuImg, "Pizza", "$10.50"), 
                        createMenuItem(pastaMenuImg, "Pasta", "$14.99")];
    
    
    menuItems.forEach((menuItem) => {
        menuContainer.appendChild(menuItem); 
    })

    return menuContainer;  
}