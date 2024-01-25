// index.js

// Get the main element
var mainElement = document.getElementById('main');

// Remove the main element if it exists
if (mainElement) {
  mainElement.parentNode.removeChild(mainElement);
}

// Create a new <h1> element
var newHeader = document.createElement("h1");

// Set the id attribute of the newHeader to 'victory'
newHeader.id = 'victory';

// Set the text content of the newHeader
newHeader.textContent = "SAMUEL-CHU is the champion";

// Append the newHeader to the body
document.body.appendChild(newHeader);
