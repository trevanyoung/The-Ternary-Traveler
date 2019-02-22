import APIManager from "./dataManager"
import postNewPlace from "./submitNewPlace"

//Displays Form/Input fields for user
const addPlaces = () => {
    document.querySelector(".output").innerHTML =
     `
        <div>
            <input type="hidden" id="hiddenTaskInput">
                <h1>The Ternary Traveler</h1>
        </div>

        <div>
            <fieldset>
                <label for="countryName">Name of Country:</label>
                <input type="text" name="countryName" id="countryName__input" placeholder="Please Add Country Name...">
            </fieldset>
        </div>

        <div>
            <fieldset>
                <label for="visa">Visa Required?</label>
                <input type="checkbox" name="visaRequired" value="" id="visaRequired__input">Completed<br>
            </fieldset>

            <button id="submitInterest">Add Place!</button>

        </div>
    `
    //click event starts function
    document.querySelector("#submitInterest").addEventListener("click",(event) => {
        if(event.target.textContent === "Add Place!"){
            console.log("clicked Add Place button")
            postNewPlace()
        }
        // //Will edit selected task, and then
        // else if (event.target.textContent === "Update Task"){
        //     editTask()
        // }
})

}

export default addPlaces