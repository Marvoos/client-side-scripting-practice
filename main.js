// Start of Name logic

// Grabbing the input elements inside of the form
// Retrieve the first-name input by the id 'first-name'
const first_name = document.getElementById("first-name");
// Retrieve the last-name input by the id 'last-name'
const last_name = document.getElementById("last-name");
// Retrieve the full-name input by the id 'full-name'
const full_name = document.getElementById("full-name");

/* Function for the full name. Essentially grabs the values of each input and replaces the read 
only input 'full name' by the string of first name and last name together*/
const fullNameInput = () => {
    full_name.value = `${first_name.value} ${last_name.value}`;
}

//Apply this helper function to events on the first-name and last-name input elements
/* Includes both keyup and keydown to allow each character to update everytime a key is pressed down and released rather than when the keys
are down or up which results in an input delay*/
first_name.addEventListener('keyup', fullNameInput);
first_name.addEventListener('keydown', fullNameInput);
last_name.addEventListener('keydown', fullNameInput);
last_name.addEventListener('keyup', fullNameInput);

let ref = document.referrer;
var filename = ref.split("/").pop();
console.log(filename);



