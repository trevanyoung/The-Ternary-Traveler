const APIManager = {


    getPlaces: () => {
        return fetch("http://localhost:8088/places")
            .then(res => res.json())
    },

     // Post New Place To JSON
     postNewPlace: (newPlace) => {
        return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlace)
        })
    },

    // Delete Place From JSON
    deletePlace: (place) => {
        return fetch(`http://localhost:8088/tasks/${placeId}`, {
            method: "DELETE",
        })
    }

}