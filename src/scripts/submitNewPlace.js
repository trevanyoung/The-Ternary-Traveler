import APIManager from "./dataManager"
import addPlace from "./displayMain"
import createPlace from "./placeObjectCreator"

//Stores data from fields into an object
let postNewPlace = () => {
    // Input is gathered from the selected IDs and stored in a variable
    // Input fields are queried and based on ID
    const name = document.querySelector("#countryName__input").value
    const visaRequired = document.querySelector("#visaRequired__input").checked
    const newPlaceObject = createPlace(name, visaRequired)

    console.log(newPlaceObject)
    APIManager.postNewPlace(newPlaceObject)
}

export default postNewPlace