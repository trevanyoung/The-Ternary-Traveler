import APIManager from "./dataManager"

function printPlacesToDom(){

    APIManager.getPlaces().then((places)=>{
        let printPlace = document.querySelector(".output")
        places.forEach(place => {

                        printPlace.innerHTML += `
                        <h1>${place.name}</h1>
                        <p>${place.visa_required}</p>
                        <button id="deleteTaskButton--${place.id}">Delete</button>
                        <button id="editTaskButton--${place.id}">Edit</button>
                                        `
            })
        })
    }


export default printPlacesToDom