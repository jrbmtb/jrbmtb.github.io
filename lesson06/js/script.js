// Function for hamburguer menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// Pop-up message (Pancakes)
const today = new Date();
console.log(today);

const dayNumber = today.getUTCDay();
console.log(dayNumber);

const element = document.getElementById("message");
if (dayNumber == 5) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}

// Get current date
var currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); 
var yyyy = currentDate.getFullYear();

var format = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long'};
document.write(currentDate.toLocaleDateString('en', format));


