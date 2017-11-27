// creates var for the buttons, elements, and counter
const createButton = document.getElementById("creator"); //'create' button
const textbox1 = document.getElementById("inputBox"); // textbox
const containerDiv = document.getElementById("container"); // container to hold all of the cards
let counter = 0; // counter for id naming
const deleteB = document.getElementsByClassName("deleter"); // the 'delete' buttons

// event listener for the 'create' button that should create a new div element, then grab the content from the textbox, then place that content inside the new div, then place that new div inside of the div with id=container. each card will have its own 'delete' button that deletes its own card, as well as empty the content from the textbox
createButton.addEventListener("click", function(ev) {
    // create the new element
    let newCard = document.createElement("div");

    // retrieves the user input from the textbox
    let newContent = textbox1.value;

    // this is a text node to hold the users text input
    let newContentNode = document.createTextNode(newContent);
    
    //Create node for delete button
    let deleteButtonDiv = document.createElement("button");
    deleteButtonDiv.innerHTML = "DELETE";
    // give the button a class in order to reference it easier
    deleteButtonDiv.setAttribute("class", " deleter");
    
    // place the text node inside the new card
    newCard.appendChild(newContentNode);
    // place a break element
    let br = document.createElement("br");
    newCard.appendChild(br);
    // place the 'delete' button
    newCard.appendChild(deleteButtonDiv);
    // assign the new card a unique id
    newCard.setAttribute("id", `divvy${counter}`);
    //Finally, place the new card inside of the 'container' div
    containerDiv.appendChild(newCard);

    // use the array of buttons to select this element and give its 'delete' button an event listener to delete itself
    deleteB[counter].addEventListener("click", function (event) {
        // assign the card, by id, to a new var
        let newCardThis = document.getElementById(`divvy${counter}`);
        // remove 'this' element
        containerDiv.removeChild(newCardThis);
    });

    
    counter++; // increase the counter for th enext element
    textbox1.value = ""; // erase the user input form the box
    textbox1.focus(); // force focus on the textbox

});
