// creates var for the button
const createButton = document.getElementById("creator");
const textbox1 = document.getElementById("inputBox");
// event listener that should create a new div element, then grab the content from the textbox, then place that ocntent inside the new div, then place that new div inside of the div with id=container
createButton.addEventListener("click", function(ev) {
        let newCard = document.createElement("div");
        let newContent = textbox1.value; 
        let newContentNode = document.createTextNode(newContent);
        newCard.appendChild(newContentNode);
        // newCard.innerHTML = cardContent; //necessary?
        //---OR THIS---
        // newCard.appendChild(cardContent); 
        document.getElementById("container").appendChild(newCard);

    }
);