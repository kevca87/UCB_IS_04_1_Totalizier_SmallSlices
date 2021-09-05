const form = document.querySelector("#totalizer-form");
const quantity = document.querySelector("#quantity-input");
const price = document.querySelector("#price-input");
const state = document.querySelector("#state");

const quantity_output = document.querySelector("#show-quantity");
const price_output = document.querySelector("#show-price");
const total_price_output = document.querySelector("#show-total-price");
const total_taxes_price_output = document.querySelector("#show-total-taxes-price");
const state_output = document.querySelector("#show-state");

var taxes = {
    "UT":0.0665,
    "NV":0.08,
    "TX":0.0625,
    "AL":0.04,
    "CA":0.0825
}

form.addEventListener("submit",event=>{
    event.preventDefault()
    quantity_output.innerHTML = "Quantity: " + quantity.value
    price_output.innerHTML = "Price: " + price.value
    let taxe_defect = 0.0836
    let total_price =  price.value * quantity.value 
    let total_taxes_price =  total_price * (1+taxe_defect)
    total_price_output.innerHTML = "Total: " + total_price
    total_taxes_price_output.innerHTML = "Total with taxes: " + total_taxes_price
    state_output.innerHTML = "State: " + state.value
})
