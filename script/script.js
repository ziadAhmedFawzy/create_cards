// add card func
function Card() {
    // createCard
let container = document.createElement("div")
let img = document.createElement("img")
let mainCard = document.createElement("h1")

// add content
let text = document.createTextNode("card")
mainCard.appendChild(text)
img.setAttribute("src", "data/1.jpg")

// conect crads together
container.appendChild(img)
container.appendChild(mainCard)

// add style_to_card

container.style.cssText = `text-align: center; padding: 10px; background-color: #0ef; width: fit-content; margin: 10px auto`
img.style.width = "250px"
mainCard.style.color = "#fff"

// add in body
document.body.appendChild(container)
}

// numbers of cards
let numsCard = window.prompt("choose num of cards: ")

for(let i = 0; i < numsCard; i++)
{
    Card()
}