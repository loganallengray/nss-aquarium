const database = {
    fish: [
        {
            id: 1,
            image: "https://images.pexels.com/photos/8887689/pexels-photo-8887689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            species: "Freshwater Angelfish",
            name: "Bart",
            length: 3,
            food: "crustaceans",
            harvestLocation: "South American Tropics"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/10848396/pexels-photo-10848396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            species: "Flower Horn",
            name: "Megamind",
            length: 5,
            food: "Plankton",
            harvestLocation: "Coral Reef"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/5547012/pexels-photo-5547012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            species: "Black Arowana",
            name: "Tomas",
            length: 8,
            food: "smaller fish",
            harvestLocation: "South American Lake"
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/4810629/pexels-photo-4810629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            species: "Smalltooth Sawfish",
            name: "Chainz",
            length: 15,
            food: "smaller fish",
            harvestLocation: "Coast of the Atlantic Ocean"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}