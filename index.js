/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.dir( header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/


 console.log("PLAYERS array looks like this:", PLAYERS)



function createPlayer(player){
   const newDiv = document.createElement("div")
    newDiv.classList.add("player");
     newDiv.dataset.number = `${player.number}`

    newDiv.innerHTML= `
    <h3>${player.name} <em>${player.nickname}</em></h3>
    <img src="${player.photo}" alt="${player.name}">
`
    console.dir(newDiv)
    const outerDiv = document.querySelector(".player-container")
    outerDiv.append(newDiv)
}
for (const player of PLAYERS){
    createPlayer(player)
}



/***** Deliverable 4 *****/

const seven = document.querySelector("[data-number='7']")
seven.remove()