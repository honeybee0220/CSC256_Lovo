// Array to hold cart items
let cart = [];

// Function to add an item to the cart
function addItem() {
    // Prompt the user to enter the item name
    let item = prompt("Enter item name:");
    // Add the item to the cart array
    cart.push(item);
    // Update the cart display
    updateCart();
}

// Function to remove an item from the cart
function removeItem() {
    // Prompt the user to enter the item name to remove
    let item = prompt("Enter item name to remove:");
    // Find the index of the item in the cart array
    let index = cart.indexOf(item);
    // If the item is found, remove it from the cart array
    if (index > -1) {
        cart.splice(index, 1);
    }
    // Update the cart display
    updateCart();
}

// Function to checkout and clear the cart
function checkout() {
    // If the cart is empty, alert the user
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        // Alert the user with the items being checked out
        alert("Checking out the following items: " + cart.join(", "));
        // Clear the cart array
        cart = [];
        // Update the cart display
        updateCart();
    }
}

// Function to update the cart display
function updateCart() {
    // Get the cart display element
    let cartDiv = document.getElementById("cart");
    // Display the items in the cart
    cartDiv.innerHTML = "Cart: " + cart.join(", ");
}
