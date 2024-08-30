import { getSides, setSide } from "./database.js"

const sideDishes = getSides()

document.addEventListener("change", (event) => {
    console.log("a click event happened upon clicking sideDish so we are calling setSides()")
    if (event.target.name === "sideDish") {
        setSide(parseInt(event.target.value));
        console.log("Side selected:", event.target.value);
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"
export const Sides = () => {
    let html = "<ul>"

    const listItems = sideDishes.map((side, index) => {
        return `<li>
            <input type="radio" name="sideDish" value="${side.id}" /> ${side.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

