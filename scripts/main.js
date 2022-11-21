// Import the FishList function from the correct module
import { FishList } from './fish.js'
import { tipList } from './tips.js'
import { locationList } from './locations.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */

const fishHTMLElement = document.querySelector("#fish_container")
fishHTMLElement.innerHTML = FishList()

const tipsHTMLElement = document.querySelector("#tip_container")
tipsHTMLElement.innerHTML = tipList()

const locationsHTMLElement = document.querySelector("#location_container")
locationsHTMLElement.innerHTML = locationList()