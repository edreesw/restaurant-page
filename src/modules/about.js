import pizzaImg from "../images/pizza-stock.jpeg"; 

export default function loadAbout() {
    /*
    <main class="restaurant-main">
    <img src="" alt="" class="restaurant-main-image">
    <h2>Mama Mia!</h2>
    <p class="restaurant-main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo itaque doloribus corrupti delectus ducimus, alias dicta voluptates culpa inventore nobis!</p>
    </main>
    */
    const mainElement = document.getElementById("main-content"); 

    const aboutContainer = document.createElement("div"); 
    aboutContainer.classList.add("about-container"); 

    const aboutImage = new Image();
    aboutImage.src = pizzaImg;
    aboutImage.classList.add("about-image"); 

    const aboutHeader = document.createElement("h2"); 
    aboutHeader.textContent = "Mama Mia!"; 
    aboutHeader.classList.add("about-header"); 

    const aboutText = document.createElement("p"); 
    aboutText.textContent = "At Pizza Pasta Restaurant we know about two things and two things only: Pizza and Pasta. That's it. Enjoy!"; 
    aboutText.classList.add("about-text"); 

    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutImage); 
    aboutContainer.appendChild(aboutText); 

    mainElement.appendChild(aboutContainer); 

}