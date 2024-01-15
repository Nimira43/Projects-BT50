const container = document.getElementById('container')
const colours = ['aqua','blue','blueviolet','chartreuse','coral','crimson','deeppink','deepskyblue','dodgerblue','forestgreen','fuchsia','gold','green','magenta','olive','orange','orangered','red','purple','royalblue','salmon','silver','yellow']
const SQUARES = 1800

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColour(square))
    square.addEventListener('mouseout', () => removeColour(square))

    container.appendChild(square)
}

function setColour(element) {
    const colour = getRandomColour()
    element.style.background = colour
    element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}` 

}

function removeColour(element) {
    element.style.background = '#110a06f8' 
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)]
}