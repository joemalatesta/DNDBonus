import React, { useState } from 'react';
import "./style.css"


const Die = () => {

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

  return (
    <>
      <div class="content">
        <div id="die">
          <figure class="face face-1"></figure>
          <figure class="face face-2"></figure>
          <figure class="face face-3"></figure>
          <figure class="face face-4"></figure>
          <figure class="face face-5"></figure>
          <figure class="face face-6"></figure>
          <figure class="face face-7"></figure>
          <figure class="face face-8"></figure>
          <figure class="face face-9"></figure>
          <figure class="face face-10"></figure>
          <figure class="face face-11"></figure>
          <figure class="face face-12"></figure>
          <figure class="face face-13"></figure>
          <figure class="face face-14"></figure>
          <figure class="face face-15"></figure>
          <figure class="face face-16"></figure>
          <figure class="face face-17"></figure>
          <figure class="face face-18"></figure>
          <figure class="face face-19"></figure>
          <figure class="face face-20"></figure>
        </div>
      </div>
    </>
  )
}
  
 export default Die 