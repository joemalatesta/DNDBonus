const die = document.getElementById("die")
let sides = 20
let initialSide = 1
let lastFace
let timeoutId
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
  clearTimeout(timeoutId)
  die.setAttribute('data-face', face)
}
  
  document.addEventListener('click', (evt) => {
  evt.preventDefault()
  clearTimeout(timeoutId)
  timeoutId = setTimeout(function () {
    rollTo(randomFace())
  }, animationDuration)
  return false
},('.randomize, .die'))

