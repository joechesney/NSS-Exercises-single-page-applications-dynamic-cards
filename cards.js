// creates var for the button
const createButton = document.getElementById("creator");

// event listener that should create a new div element, then grab the content from the textbox, then place that ocntent inside the new div, then place that new div inside of the div with id=container
createButton.addEventListener("click", createOne(event) {
        let newCard = document.createElement("div");
        let textbox1 = document.getElementById("inputBox");
        let cardContent = textbox1.value; //necessary?
        // newCard.innerHTML = cardContent //necessary?
        //---OR THIS---
        newCard.appendChild(cardContent); 
        document.getElementById("container").appendChild(newCard);

    };
);