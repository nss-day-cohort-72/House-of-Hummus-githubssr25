import { FoodTruck, placeComboOrder } from "./FoodTruck.js"
import { buildOrderListItem, Sales} from "./Sales.js"
import {Sides} from "./SideDishes.js"
import {Veggies} from "./Vegetables.js"
import { Entrees } from "./Entrees.js"

const mainContainer = document.querySelector("#container")

// document.addEventListener("DOMContentLoaded", () => {
//     setPurchaseButtonListener();
//    });

   const setPurchaseButtonListener = () => {
    const purchaseButton = document.getElementById('purchase');
    if (purchaseButton) {
        purchaseButton.addEventListener('click', placeComboOrder);
    }
   }
          // Re-attach the listener after the DOM is re-rendered
          // NOTE YOU HAVE TO RE ATTACH EVENT LISTENERS TO CUSTOM ELEMENTS UPON RE RENDER
          // NOT IF YOU WERE ATTACHING TO ENTIRE DOCUMENT BUT TO CUSTOM EVENT YES
        //   const purchaseButton = document.getElementById('purchase');
        //   if (purchaseButton) {
        //       purchaseButton.addEventListener('click', placeComboOrder);
        //   }

const renderAllHTML = () => {
    let mainContainerHTML = `
    ${FoodTruck()}
    <section class="options">
    <div class="choices__base entrees">
    <h2> Entrees </h2>
    ${Entrees()}
    </div>
    <div class="choices__veggies veggies">
    <h2> Vegetables</h2>
    ${Veggies()}
    </div>
    <div class="choices__sides sides">
    <h2> Sides</h2>
    ${Sides()}
    </div>
    </section>
    `
    mainContainer.innerHTML = mainContainerHTML;

    setPurchaseButtonListener();

}


   //listen for purchaseOccured to re render and re set DOM

   document.addEventListener("purchaseOccured", () => {
    console.log("State of data has changed. Regenerating HTML...");
    renderAllHTML();  // Re-render the HTML
   })
    
    
    //Check if the Listener is Already Attached: The condition if (!document.getElementById('purchase').dataset.listenerAdded) checks 
// if a custom data attribute (data-listener-added) is set on the purchase button. 
//If it's not set, it means that the event listener has not been added yet.
// Attach the Event Listener: If the listener has not been added, the event listener for the click 
// event is attached to the purchase button with 
// document.getElementById('purchase').addEventListener('click', placeComboOrder);.

// Mark the Listener as Attached: After attaching the listener, the line 
// document.getElementById('purchase').dataset.listenerAdded = true; sets the custom data
//  attribute to mark that the listener has been attached. This ensures that the next
//   time renderAllHTML runs, the listener won't be attached again.

     //attach event listener for purchase combo button
    // document.getElementById('purchase').addEventListener('click', placeComboOrder)



    // Initial rendering
renderAllHTML();

