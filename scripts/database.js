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
    ],
    tips: [
        {
            topic: "Swamps",
            tip: "Wear big boots and two layers of socks. Three if you can manage it."
        },
        {
            topic: "Sawfish",
            tip: "Make sure to grab it by the fin and not the saw. Or wear gloves."
        },
        {
            topic: "Fish Food",
            tip: "For the more predatorally inclined of my collection, I've been experimenting with vegan food options so I won't have to feed them any smaller fish or chum. They haven't touched the stuff yet, but I'm getting close I think."
        },
        {
            topic: "Flower Horn Fish",
            tip: "If you blow up a piece of bubblegum in front of a Flower Horn Fish's tank, it may mistake it for a potential mate. Though it may seem funny when they swim full speed into the case, it isn't very good for them."
        },
        {
            topic: "Beaches",
            tip: "Bring sunblock. And if you don't, bring Aloe Vera."
        },
        {
            topic: "Cats",
            tip: "Normally you'd have to worry about your fish being eaten by your beloved pet feline, but when you're an exotic fish owner, you must worry about the opposite."
        }
    ],
    locations: [
        {
            image: "https://images.pexels.com/photos/1533060/pexels-photo-1533060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Swamp",
            climate: "Warm",
            humidity: "Wet"
        },
        {
            image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "South American Tropics",
            climate: "Warm",
            humidity: "Wet"
        },
        {
            image: "https://images.pexels.com/photos/3948080/pexels-photo-3948080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Southeast Asia",
            climate: "Warm",
            humidity: "Wet"
        },
        {
            image: "https://images.pexels.com/photos/35637/alaska-glacier-ice-mountains.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Alaska",
            climate: "Cold",
            humidity: "Wet"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tip => ({...tip}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}