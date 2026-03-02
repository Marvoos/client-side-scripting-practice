// Retrieve the span for the greeting
const timeDayMsg = document.getElementById("time-day-msg");
// Retrieve the span for the full name
const fullNameMsg = document.getElementById("full-name-msg");
// Retrieve the span for the referral document name
const referralNameMsg = document.getElementById("referral-name-msg");
// Retrieve the span for the time taken on form
const elapsedTimeMsg = document.getElementById("elapsed-time-msg");

// Retrieve the timer beginning from the session storage
const startTime = Number(sessionStorage.getItem("timerStart"));
// Retrieve the timer end from the session storage
const endTime = Number((sessionStorage.getItem("timerEnd")));
// Calculate the total time in minutes by dividing the amount of milliseconds by 60,000
const timeMinutes = Math.round(((endTime - startTime)) / 60000);
// Format the time taken before applying it to the content in the span
const formSubmitTime = `${timeMinutes} ${timeMinutes === 1 ? "minute" : "minutes"}`;

/* Retrieve a list of the parameters in the query string using URLSearchParams and location.search 
which retrieves the string after the '?' */
const queryStringParams = new URLSearchParams(window.location.search);
// Get the exact value from the full-name:value pair
const fullNameString = queryStringParams.get("full-name")

//Retrieve the exact hour in 24 hour time
const currHour = new Date().getHours();

// Tailor the greeting message based on the users time zone provided by the browser
if (currHour < 12) {
    timeDayMsg.textContent = "Good morning";
} else if (currHour >= 12 && currHour < 19) {
    timeDayMsg.textContent = "Good afternoon";
}
else if (currHour >= 19) {
    timeDayMsg.textContent = "Good evening";
}

// Change the text/content within the span to be the full name as retrieved earlier
fullNameMsg.textContent = fullNameString;
/* Retrieve the last element in the array split up by the forward slash. This array 
will be a string consisting of the previous URL unless it was a direct entry. If so, the text should be Unknown instead*/
referralNameMsg.textContent = document.referrer.split('/').pop() || "Unknown";
// Change the text/content inside of the time taken span.
elapsedTimeMsg.textContent = formSubmitTime;


