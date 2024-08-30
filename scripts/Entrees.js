import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
console.log("what is event.target object values", event.target);
console.log("what is event target id", event.target.id);
console.log("what is event target value", event.target.value);
console.log("what is event.target.dataset and dataset.entreeName", event.target.dataset, event.target.dataset.entreeName)

        setEntree(event.target.dataset.entreeName);  // This will set the entree based on the name selected
        console.log("Entree selected:", event.target.dataset.entreeName);
    }

})

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"

export const Entrees = () => {
    let html = "<ul>"

    const listItems = entrees.map((entree, index) => {
        return `<li>
            <input type="radio" name="entree" value="${index + 1}" data-entree-name="${entree.name}"/> ${entree.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

// had this previously
//   <input type="radio" name="entree" value="${entree.name}" /> ${entree.name}
// Value in Radio Input: The value of each radio button was set to entree.name, which means that when a user selected an entree, 
// the selected value was the name of the entree (e.g., "Hummus and Hot Sauce").
// Issue: The test was likely expecting the value of the radio inputs to be something different, specifically an index or a unique identifier
//  rather than the name. The test was trying to match the value
//  in the radio button to an expected value (probably an index like 1, 2, etc.), and it couldn't find the match, causing the test to fail.

//now we do this     <input type="radio" name="entree" value="${index + 1}" /> ${entree.name}
//Value in Radio Input: The value is now set to index + 1, which means the first entree will have a value of 1, 
//the second will have a value of 2, and so on.
// Reason for Change: The Cypress tests are expecting the radio button values to correspond to indices rather than the actual names. 
// By changing the value to index + 1, the test can now find the correct radio button input values and pass successfully.