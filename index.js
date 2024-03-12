'use strict'
const youBox = document.querySelector("#you-box")
const buttonChoice = document.querySelectorAll(".button-choice")
const pcBox = document.querySelector("#pc-box")
const youScore = document.querySelector("#you-score")
const pcScore = document.querySelector("#pc-score")



for ( let i = 0; i < buttonChoice.length; i++) { 
    buttonChoice[i].addEventListener('click', () => {
        youBox.textContent =buttonChoice[i].textContent
        const randomNum = Math.floor( Math.random () * 3)
        pcBox.textContent = buttonChoice[randomNum].textContent


        if (youBox.textContent === pcBox.textContent) {
            console.log("draw")
            return
        } else if (
                   (youBox.textContent === "🪨" && pcBox.textContent === "✂️")  || 
                   (youBox.textContent === "✂️" && pcBox.textContent === "📄")  || 
                   (youBox.textContent === "📄" && pcBox.textContent === "🪨" )
                ){ 
                    youScore.textContent =Number(youScore.textContent) + 1

        } else {
            pcScore.textContent =  Number(pcScore.textContent) + 1
        }
    }
)}