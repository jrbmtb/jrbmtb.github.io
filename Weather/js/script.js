// Function for hamburguer menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// Get current date
var currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); 
var yyyy = currentDate.getFullYear();

var format = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long'};
document.write(currentDate.toLocaleDateString('en', format));