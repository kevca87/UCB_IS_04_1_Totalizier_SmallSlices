const form = document.querySelector("#totalizer-form");
const quantity = document.querySelector("#quantity-input");
const price = document.querySelector("#price-input");

const quantity_output = document.querySelector("#show-quantity");
const price_output = document.querySelector("#show-price");
const total_price_output = document.querySelector("#show-total-price");

form.addEventListener("submit",event=>{
    event.preventDefault()
    quantity_output.innerHTML = "Quantity: " + quantity.value
    price_output.innerHTML = "Price: " + price.value
    let total_price =  price.value * quantity.value 
    total_price_output.innerHTML = "Total: " + total_price
})
