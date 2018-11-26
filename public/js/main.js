let icon = document.getElementById("icon");
let myNav2 = document.getElementById("myNav2");

let show = false;

icon.addEventListener("click", () => {

    if (!show) {
        myNav2.classList.add("show");
        show = true;
    } else {
        myNav2.classList.remove("show");
        show = false;
    }

});



const toggleNav = () => {
    icon.classList.add("show");
}




// MENU SECTIOJ ----------------------------------------------------------

let pizzaBtn = document.getElementById("pizzaBtn");
let pastaBtn = document.getElementById("pastaBtn");
let saladBtn = document.getElementById("saladBtn");
let desertBtn = document.getElementById("desertBtn");



let pizza = document.getElementById("Pizza");
let pasta = document.getElementById("Pasta");
let salad = document.getElementById("Salad");
let desert = document.getElementById("Deserts");


let food = "Pizza";

const menuSelect = (event) => {

    if (food === event) {
        console.log("the same");
        return;
    }

    if (event === "Pasta") {

        pizzaBtn.classList.remove("show");
        pastaBtn.classList.add("show");
        saladBtn.classList.remove("show");
        desertBtn.classList.remove("show");

        pizza.classList.remove("show");
        salad.classList.remove("show");
        desert.classList.remove("show");
        pasta.classList.add("show");
        food = "Pasta";
    }

    if (event === "Salads") {

        pizzaBtn.classList.remove("show");
        pastaBtn.classList.remove("show");
        saladBtn.classList.add("show");
        desertBtn.classList.remove("show");

        pizza.classList.remove("show");
        salad.classList.add("show");
        desert.classList.remove("show");
        pasta.classList.remove("show");
        food = "Salads";
    }


    if (event === "Pizza") {

        pizzaBtn.classList.add("show");
        pastaBtn.classList.remove("show");
        saladBtn.classList.remove("show");
        desertBtn.classList.remove("show");

        pizza.classList.add("show");
        salad.classList.remove("show");
        desert.classList.remove("show");
        pasta.classList.remove("show");
        food = "Pizza";
    }

    if (event === "Deserts") {

        pizzaBtn.classList.remove("show");
        pastaBtn.classList.remove("show");
        saladBtn.classList.remove("show");
        desertBtn.classList.add("show");

        pizza.classList.remove("show");
        salad.classList.remove("show");
        desert.classList.add("show");
        pasta.classList.remove("show");
        food = "Deserts";
    }
}
























