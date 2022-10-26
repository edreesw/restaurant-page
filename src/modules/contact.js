import chefImg from "../images/chef-pizza-stock.jpeg";

function addContactRow(table, contactTypeText, contactValueText) {
    const tr1 = document.createElement("tr"); 
	const td1a = document.createElement("td"); 
	const td1b = document.createElement("td"); 

	td1a.textContent = contactTypeText + ": "; 
	td1b.textContent = contactValueText; 

	tr1.appendChild(td1a); 
	tr1.appendChild(td1b); 

	table.appendChild(tr1); 
}

export default function generateContactContent() {
    const image = new Image(); 
    image.src = chefImg; 

    const contactContainer = document.createElement("div"); 
    contactContainer.classList.add("contact-container");

    const contactText = document.createElement("h2"); 
    contactText.textContent = "Contact Us!"

    const table = document.createElement("table"); 
    table.classList.add("contact-table"); 

	addContactRow(table, "Phone Number", "1-800-FAKE-NUM"); 
    addContactRow(table, "Email", "pizzapasta@fakeemail.com"); 
    addContactRow(table, "Address", "123 Mushroom Blvd"); 

    contactContainer.appendChild(contactText); 
    contactContainer.appendChild(table); 
    contactContainer.appendChild(image); 

	return contactContainer; 
}