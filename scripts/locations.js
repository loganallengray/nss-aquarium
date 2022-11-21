import { getLocations } from "./database.js";

const locations = getLocations();

export const locationList = () => {
    // Start building a string filled with HTML syntax
    let htmlString = '<article id="tipList" class="container">'

    // Create HTNL representations of each tip here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location--card">
            <div><img  class="location__image image--card" src="${location.image}" /></div>
            <div class="location__name"><strong>Location:</strong> ${location.name}</div>
            <div class="location__climate"><strong>Climate:</strong> ${location.climate}</div>
            <div class="location__humidity"><strong>Humidity:</strong> ${location.humidity}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}