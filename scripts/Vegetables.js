import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

document.addEventListener("change", (event) => {
    console.log("a click event happened upon clicking vegetable so we are calling setVeggie()")
    if (event.target.name === "vegetable") {
        setVeggie(parseInt(event.target.value)); // Parse the value as an integer
        console.log("Vegetable selected:", event.target.value);
    }
});

export const Veggies = () => {
    let html = "<ul>"

    const listItems = veggies.map((veggie, index) => {
        return `<li>
            <input type="radio" name="vegetable" value="${veggie.id}" /> ${veggie.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}


