// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

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