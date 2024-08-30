import { addPurchase, setVeggie, setEntree, setSide, getComboChoices} from "./database.js"
import { Sales, buildOrderListItem } from "./Sales.js"

export const placeComboOrder = async () => {

    const comboChoice = getComboChoices();

    console.log("Placing order...");
    console.log("Current combo choices before placing order:", comboChoice);

    // Ensure that all selections are made before proceeding
    if (!comboChoice.entree || !comboChoice.veggie || !comboChoice.side) {
        console.error("Incomplete combo choices. Cannot place order.");
        return;
    }

    // Add the current combo to the purchases
    addPurchase();// Add the purchase and dispatch the event

        // Dispatch a custom event to notify that the state has changed
        document.dispatchEvent(new CustomEvent("purchaseOccured"));


    // purchaseButton.disabled = false;  // Re-enable button after order is placed
        
//corresponds to this in main 
// document.addEventListener("stateChanged", event => {
//     console.log("State of data has changed. Regenerating HTML...");
//     renderAllHTML();  // This function should be responsible for rendering your main UI, including the updated Sales list
// });


}

//DUPLICATE AND MIGHT BE CAUSING ISSUES 
// document.addEventListener("click", (event) => {
//     console.log("a click event happened upon clicking purchase so we are calling placeComboOrder()")
//     if (event.target.id === "purchase") {
//         placeComboOrder();
//     }
// });

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}
