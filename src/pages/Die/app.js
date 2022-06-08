const die = document.getElementById("die")
const roll = document.getElementById('roll')
let sides = 20
let initialSide = 1
let lastFace
let timeoutId
let transitionDuration = 300
let animationDuration  = 200

document.querySelector( 'click',  (evt) => {
  
  rollTo(document.querySelector(this).attr('href'))
  return false
},('ul > li > a'))

const randomFace = () => {
  let face = Math.floor((Math.random() * sides)) + initialSide
  lastFace = face === lastFace ? randomFace() : face
  return face;
}


const rollTo = (face) => {
  const group = document.querySelector('ul > li > a')
  const added = document.getElementsByClassName('[href=' + face + ']')
  clearTimeout(timeoutId)
  die.setAttribute('data-face', face)
}

const reset = () => {
    die.attr('data-face', null).classList.remove('rolling')
  }
  
  document.addEventListener('click', (evt) => {
    evt.preventDefault()
    // die.classList.add('rolling')
  clearTimeout(timeoutId)
  timeoutId = setTimeout(function () {
    //die.classList.remove('rolling')
    rollTo(randomFace())
  }, animationDuration)
  return false
},('.randomize, .die'))

