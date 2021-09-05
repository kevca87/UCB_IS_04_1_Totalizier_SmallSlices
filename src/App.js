const form = document.querySelector("#totalizer-form");
const quantity = document.querySelector("#quantity-input");
const price = document.querySelector("#price-input");
const state = document.querySelector("#state");

const quantity_output = document.querySelector("#show-quantity");
const price_output = document.querySelector("#show-price");
const total_price_output = document.querySelector("#show-total-price");
const total_taxes_price_output = document.querySelector("#show-total-taxes-price");
const total_taxes_discount_output = document.querySelector("#show-total-taxes-discount");
const state_tax_output = document.querySelector("#show-state");
const discount_percentage_output = document.querySelector("#show-discount");

var taxes = {
    "UT":0.0665,
    "NV":0.08,
    "TX":0.0625,
    "AL":0.04,
    "CA":0.0825
}

var discount_groups = {
    1000:0.03,
    3000:0.05,
    7000:0.07,
    10000:0.10,
    30000:0.15
}

function calculate_discount(total){
    switch (true) {
        case (total >= 30000 ):
            discount = total * discount_groups[30000]
            break;
        case (total >= 10000 ):
            discount = total * discount_groups[10000]
            break;
        case (total >= 7000 ):
            discount = total * discount_groups[7000]
            break;
        case (total >= 3000 ):
            discount = total * discount_groups[3000]
            break;
        case (total >= 1000 ):
            discount = total * 0.03
            break;
        default:
            discount = 0
            break;
    }
    return discount
}

form.addEventListener("submit",event=>{
    event.preventDefault()
    quantity_output.innerHTML = "Quantity: " + quantity.value
    price_output.innerHTML = "Price: " + price.value
    let tax = taxes[state.value]
    let total_price =  price.value * quantity.value 
    let total_taxes_price =  total_price * (1+tax)
    let discount = calculate_discount(total_taxes_price)
    total_price_output.innerHTML = "Total: " + total_price
    state_tax_output.innerHTML = state.value + " tax: "+tax 
    total_taxes_price_output.innerHTML = "Total with taxes: " + total_taxes_price
    discount_percentage_output.innerHTML = "Discount: "+ discount
    let total_taxes_discount_price = total_taxes_price - discount
    total_taxes_discount_output.innerHTML = "Total with taxes and discount: " + total_taxes_discount_price
})
