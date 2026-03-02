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

// Apply this helper function to events on the first-name and last-name input elements
/* Incorporates the input event that ensure if anything changes within the input, the full name field will update
automatically*/

first_name.addEventListener('input', fullNameInput);
last_name.addEventListener('input', fullNameInput);

// Start the timer as soon as the input is loaded using the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    let timerStart = Date.now();
    // Bring to the session storage in browser to allow for retrieval on next page
    sessionStorage.setItem("timerStart", timerStart)
});

// On submit, we should send a time stamp to the session storage to calculate the time taken on the next page
document.addEventListener('submit', () => {
    let timerEnd = Date.now();
    sessionStorage.setItem("timerEnd", timerEnd);
});
