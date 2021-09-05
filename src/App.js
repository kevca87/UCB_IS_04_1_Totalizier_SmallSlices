const form = document.querySelector("#totalizer-form");
const quantity = document.querySelector("#quantity-input");
const price = document.querySelector("#price-input");
const quantity_output = document.querySelector("#show-quantity");
const price_output = document.querySelector("#show-price");

form.addEventListener("submit",event=>{
    event.preventDefault();
    quantity_output.innerHTML = "Quantity: " + quantity.value;
    price_output.innerHTML = "Price: " + price.value;
})
