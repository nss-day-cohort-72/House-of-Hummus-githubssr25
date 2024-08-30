



const database = {
    entrees: [
        { name: "Hummus and Hot Sauce", price: 6.00 },
        { name: "Chicken Fried Lamb Kabob", price: 14.25 },
        { name: "Hot Chicken Greek Salad", price: 10.50 },
        { name: "Brussel Sprout Moussaka", price: 11.50 },
        { name: "Okrakopita", price: 8.40 },
        { name: "Fried Onion and Grape Leaves", price: 6.95 },
        { name: "Chess Baklava", price: 5.30 },
        { name: "Gyro Biscuits", price: 8.95 },
        { name: "Black Eye Pea Falafel", price: 7.80 },
        { name: "Pecan Pastitsio", price: 12.49 }
    ],
    veggies: [
        { id: 1, type: "Okra", price: 2.65 },
        { id: 2, type: "Collard Greens", price: 2.05 },
        { id: 3, type: "Swiss Chard", price: 2.15 },
        { id: 4, type: "Corn", price: 1.75 },
        { id: 5, type: "Brussel Sprouts", price: 3.00 },
        { id: 6, type: "Sweet Potatoes", price: 2.40 },
        { id: 7, type: "Grits", price: 3.05 },
        { id: 8, type: "Fried Green Tomatoes", price: 3.89 },
        { id: 9, type: "Mac and Feta Cheese", price: 2.55 }
    ],
    sides: [
        { id: 1, title: "Chicken Fried Steak Poppers", price: 5.45 },
        { id: 2, title: "Bacon", price: 2.95 },
        { id: 3, title: "Turkey Wings", price: 4.80 },
        { id: 4, title: "BBQ Lamb Ribs", price: 9.25 },
        { id: 5, title: "Catfish Nuggets", price: 6.75 },
        { id: 6, title: "Mini Souvlaki", price: 5.20 }
    ],

    // database.entrees, database.veggies, database.sides: 
    //These arrays represent all the available
    //  options for the user to choose from. They are static and should not 
    //change based on user interaction. 
    // Their purpose is to provide the list of options that the user can select.


    purchases: [],
    comboChoices: {},
//State Management: The comboChoices object is acting as a 
//temporary state holder for the user's
// current selections. By the time placeComboOrder is called, comboChoices 
//already contains the selected entree, veggie, and side.
// IMPORTNAT: After the order is finalized (i.e., after the placeComboOrder 
//function processes the current 
//selections stored in comboChoices), you would typically want to 
//clear the comboChoices object to reset the state and prepare for the next order.


}

export const getVeggies = () => database.veggies.map(veggie => ({...veggie}))
export const getEntrees = () => database.entrees.map(entree => ({...entree}))
export const getSides = () => database.sides.map(side => ({ ...side }))

// THIS IS WRONG COMBOCHOICES IS AN OBJECT NOT AN ARRAY 
// export const getComboChoices = () => database.comboChoices.map(comboChoice => ({ ...comboChoice }))

export const getComboChoices = () => ({ ...database.comboChoices });

export const getPurchases = () => database.purchases.map(purchase => ({ ...purchase}))

export const resetComboChoices = () => {

    console.log("Before resetting combo choices:", database.comboChoices);

    database.comboChoices = {
        entree: {},
        veggie: {},
        side: {},
    };
    console.log("Transient state reset.");
};


export const setVeggie = (veggieId) => {
    let veggie = database.veggies.find(veggie => veggie.id === parseInt(veggieId)); // Ensure it's parsed as an integer
    database.comboChoices.veggie = veggie;
    console.log("Selected veggie:", veggie);
    console.log("Updated comboChoices:", database.comboChoices);
}

export const setEntree = (entreeName) => {
    console.log("what is entreeName", entreeName);
    let entree = database.entrees.find(entree => entree.name === entreeName);
    database.comboChoices.entree = entree;
    console.log("Selected entree:", entree);
    console.log("Updated comboChoices:", database.comboChoices);
}

export const setSide = (sideId) => {
    const side = database.sides.find(side => side.id === sideId);
    database.comboChoices.side = side;  // Store the entire side object
    console.log("Selected side:", side);
    console.log("Updated comboChoices:", database.comboChoices);
}

export const addPurchase = () => {

    const { entree, veggie, side } = database.comboChoices;


    // Log current selections before attempting to add the purchase
    console.log("Attempting to add purchase with:", { entree, veggie, side });

    // Check if all selections are made
    if (!entree || Object.keys(entree).length === 0 || 
    !veggie || Object.keys(veggie).length === 0 || 
    !side || Object.keys(side).length === 0) {
    console.error("Cannot add purchase: incomplete selections.");
    return;
}
    const newPurchase = { 
        id: database.purchases.length + 1,  // Generate a simple incremental ID
        ...database.comboChoices, 
        total: totalOrderPrice(database.comboChoices) 
    };
    
    database.purchases.push(newPurchase);  // Add the purchase with the new ID to the purchases array
    resetComboChoices();  // Reset the combo choices for the next order



    console.log("New purchase added:", newPurchase);  // Log the new purchase
    console.log("Combo choices reset:", database.comboChoices); // Log the reset state


}

export const totalOrderPrice = (order) => {
    const veggiePrice = order.veggie?.price || 0;
    const entreePrice = order.entree?.price || 0;
    const sidePrice = order.side?.price || 0;


    const total = veggiePrice + entreePrice + sidePrice;

    return total;
}
