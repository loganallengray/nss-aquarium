import { getTips } from "./database.js"

const tips = getTips();

export const tipList = () => {
    // Start building a string filled with HTML syntax
    let htmlString = '<article id="tipList" class="container">'

    // Create HTNL representations of each tip here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tips--card">
            <div class="tips__topic"><strong>Topic:</strong> ${tip.topic}</div>
            <div class="tips__tip"> ${tip.tip}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}