// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

const fishes = getFish()


// Get holy fish
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishes) {
        if (fish % 3 === 0) {
            holyFish.push(fish);
        }
    }

    return holyFish
}

// get soldier fish
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = [];

    for (const fish of fishes) {
        if (fish % 3 !== 0 && fish % 5 === 0) {
            soldiers.push(fish);
        }
    }

    return soldiers;
}

// get regular fish
export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = [];

    for (const fish of fishes) {
        if (fish % 3 !== 0 && fish % 5 !== 0) {
            holyFish.push(fish);
        }
    }

    return regularFish
}

/* 
    FISHLIST TO HTML
*/

export const FishList = () => {
    // Start building a string filled with HTML syntax
    let htmlString = '<article id="fishList" class="container">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish--card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name"><strong>Name:</strong> ${fish.name}</div>
            <div class="fish__species"><strong>Species:</strong> ${fish.species}</div>
            <div class="fish__length"><strong>Length:</strong> ${fish.length}in.</div>
            <div class="fish__location"><strong>Harvest Location:</strong> ${fish.harvestLocation}</div>
            <div class="fish__diet"><strong>Diet:</strong> ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}