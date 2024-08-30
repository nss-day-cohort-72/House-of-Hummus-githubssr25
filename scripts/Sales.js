import { getVeggies, getEntrees, getSides, getPurchases, totalOrderPrice } from "./database.js"


const veggies = getVeggies()
const entrees = getEntrees()
const sides = getSides()

// export const addPurchase = async () => {

// let newPurchase = {
//     entree: order.entree,
//     veggie: order.veggie,
//     side: order.side,
//     total: totalOrderPrice(order)
// }; this is what im doing below but i like this way 

// const newPurchase = { 
//     id: database.purchases.length + 1,  // Generate a simple incremental ID
//     ...database.comboChoices, 
//     total: totalOrderPrice(database.comboChoices) 
// };



// VERY VERY IMPORTANT THIS IS ALL NONSENSE BC WE ARE RUNNING A DATABASE.JS NOT A DATABASE.JSON 
//OUR DATABASE.JS IS FUNCTIONING RIGHT NOW PURELY AS A IN MEMORY FRONT END STORAGE
// MECHANISM ITS TEMPORARY
// ITS NOT BEING PERSISTED. IT ONLY EXISTS WHILE APP IS RUNNING THE BROWSER. 

// SO THIS ALL BELOWIS COOL BUT ITS USELESS FOR WHAT HTIS SET UP IS DISTINCTION OF DATABASE.JS VS DATABASE.JSON
// const postPurchase = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newPurchase)
// }

// const response = await fetch("http://localhost:8088/purchase", postPurchase);


// if (response.ok) {
//     const createdPurchase = await response.json();  // Get the full purchase object, including the ID
//     console.log("Purchase successfully made! Receipt ID:", createdPurchase.id);

//     database.purchases.push(createdPurchase); // Add the purchase with the new ID to the local purchases array
//     resetComboChoices(); // Reset the combo choices for the next order

    // Now that you have the purchase ID, you can build the order list item with it
//     const orderListItemHTML = buildOrderListItem(createdPurchase);
//     console.log(orderListItemHTML); // This is the HTML that will be displayed
// } else {
//     console.error("Failed to make purchase");
// }






// // SO GIVEN THIS ISNT A REAL DB THIS BELOW IS AL WE NEED TO DO 
// database.purchases.push(newPurchase);
// resetComboChoices(); // Reset the choices after adding the purchase


// };

// };


// export const totalOrderPrice = (order) => {
//     const veggiePrice = order.veggie.price;
//     const entreePrice = order.entree.price;
//     const sidePrice = order.side.price;


//     const total = veggiePrice + entreePrice + sidePrice;

//     return total;
// }

export const buildOrderListItem = (purchase) => {
    let total = totalOrderPrice(purchase);

    // Skip rendering if the total is $0.00
    if (total === 0) {
        return '';  // Returning an empty string effectively skips this purchase
    }

    return `<li>
        Receipt #${purchase.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}


export const Sales = () => {
    const sales = getPurchases()
    return `
        <ul>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>
    `
}

